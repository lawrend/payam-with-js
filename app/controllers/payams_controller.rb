class PayamsController < ApplicationController
    before_action :authenticate_user!
    before_action :set_payam, only: [:show, :edit, :update, :destroy]

    def index
        #only display completed, original payams of one style
        if params[:style_id]
            @payams = Payam.completed.where("style_id = ? AND decomp = ?", 
                                            params[:style_id], false)
            @style = Style.find(params[:style_id])
        else
            #or all display completed original payams
            @payams = Payam.completed.where(decomp: false)
            @styles = Style.select {|st| st.protected == true }
            @payams.each do |pay|
                @styles << Style.find(pay.style_id) 
                @styles.uniq!
            end
        end
        respond_to do |format|
            format.html {render :index}
            format.json {render json: @payams}
        end
    end

    def new
        clean_styles  #remove orphaned custom styles
        @payam = Payam.new
        @line = @payam.lines.build
        @style = Style.new
    end

    def create
        @payam_params = payam_params
        @payam_params[:lines_attributes][:"0"][:auth_id] = current_user.id
        @payam = Payam.new(@payam_params)
        #check for both selection from dropdown and new entry in text field
        if style_check
            render :new
        elsif @payam.valid?
            @payam.save
            #randomly select the next scribe
            @payam.current_scribe = User.where.not(id: current_user.id).sample.id
            #send_to_next increases counter by 1 and saves
            @payam.send_to_next
            redirect_to root_path
        else
            @style = Style.new(:name => payam_params[:style_attributes][:name])
            render :new
        end
    end

    def show
        if @payam.decomp == true
            orig = Payam.find(@payam.orig)
            redirect_to payam_path(orig)
        else
            respond_to do |format|
                format.html {render :show}
                format.json {render json: @payam}
            end
        end
    end

    def showdecomp
        @orig = Payam.find(@payam.orig)
        redirect_to "/payams"
    end

    def decompose
        @payam = Payam.new
        @payam.title = (params[:title])
        @payam.decomp = (params[:decomp])
        @payam.current_scribe = nil 
        @payam.counter = 8
        @payam.orig = (params[:orig])
        @payam.style_id = (params[:style_id])
        @payam.save
        params[:lines].each_with_index do |line, index|
            Line.create(:text => line, :auth_id => current_user.id, 
                        :count => index + 1, :payam_id => @payam.id);
        end
        render json: @payam
    end

    def edit
        @line = @payam.lines.build
    end

    def update
        @payam_params = payam_params
        @payam_params[:lines_attributes][:"0"][:auth_id] = current_user.id

        if @payam.update(@payam_params)
            if @payam.counter < 8
                #select next user and increase counter by 1
                @payam.current_scribe = User.where.not(id: current_user.id).sample.id
                @payam.send_to_next
            else
                #set current_scribe to nil so it goes to no one and the payam is scoped to completed
                @payam.current_scribe = nil
                @payam.save
            end
            redirect_to root_path
        else
            @line = Line.new(:text => payam_params[:lines_attributes]["0"][:text])
            render :edit
        end
    end

    def destroy
        @payam.destroy
        flash[:notice] = "Payam Deleted!!"
        redirect_to root_path
    end

    def random_word
        line_number = ""
        5.times do 
            line_number << Random.new.rand(1..6).to_s
        end
        File.open("/Users/douglaslawrence/Development/code/rails-and-js/project-mode/payam-with-js/app/assets/other/eff_large_wordlist.txt") do |file|
            the_word = file.find {|line| line =~ /#{line_number}/ }
            return the_word[6..-1]
        end
    end

    def random
        @payam = Payam.new
        @payam.title = "Random--" + random_word 
        @payam.current_scribe = nil
        @payam.counter = 8
        @payam.style_id = 1
        @payam.save
        for i in 0..7
            line_text = ""
            15.times do
                line_text << random_word
            end
            Line.create(:text => line_text, :auth_id => current_user.id, :count => i+1, :payam_id => @payam.id)
        end
        flash[:notice] = "Random Payam Made!"
        redirect_to root_path
    end


    private

    def set_payam
        @payam = Payam.find(params[:id])
    end

    def payam_params
        params.require(:payam).permit(:style_id, :counter, :title, :current_scribe, :decomp, :orig, :lines_attributes => [:text, :payam_id, :auth_id, :count], style_attributes: [:name])
    end

    def style_check
        if !payam_params[:style_id].blank? && !payam_params[:style_attributes][:name].blank?
            @payam.style_id = payam_params[:style_id]
            @style = Style.new(:name => payam_params[:style_attributes][:name])
            @payam.errors.add(:style, "must be selected or created--not both")
        end
    end

    def clean_styles
        Style.all.each do |style|
            style.delete if style.payams.empty? && style.protected == false
        end
    end


end
