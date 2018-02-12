class PayamsController < ApplicationController
  before_action :set_payam, only: [:show, :edit, :update, :destroy, :decompose]

	def index
      #only display payam of a particular style that are completed
      if params[:style_id]
        @payams = Payam.completed.where(:style_id => params[:style_id])
      else
        #or all completed
	    @payams = Payam.completed
      end
      #everything else
      @all_other_payams = Payam.all - Payam.completed
      respond_to do |format|
          format.html {render :index}
          format.json {render json: @payams}
      end
	end

	def new
      #remove orphaned custom styles
      clean_styles
	  @payam = Payam.new
      @line = @payam.lines.build
      @style = Style.new
	end

	def create
      @payam_params = payam_params
      @payam_params[:lines_attributes][:"0"][:auth_id] = current_user.id
      @payam = Payam.new(@payam_params)
      #@payam.lines.last.auth_id = current_user.id
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
        respond_to do |format|
            format.html {render :show}
            format.json {render json: @payam}
        end
	end

    def decompose
      @payam.lines.each do |line|
        line.lose_word
      end
      redirect_to payam_path(@payam)
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

	private

    def set_payam
    	@payam = Payam.find(params[:id])
    end
    
    def payam_params
		params.require(:payam).permit(:style_id, :counter, :title, :current_scribe, :lines_attributes => [:text, :payam_id, :auth_id, :count], style_attributes: [:name])
    end

    def style_check
      if !payam_params[:style_id].blank? && !payam_params[:style_attributes][:name].blank?
        @payam.style_id = payam_params[:style_id]
        @style = Style.new(:name => payam_params[:style_attributes][:name])
        @payam.errors.add(:style, "must be selected or created--not both")
      #elsif payam_params[:style_id].blank? && payam_params[:style_attributes][:name].blank?
      #  @payam.errors.add(:style, "add a style, ya goof")
      #  @style = Style.new
      end
    end

    def clean_styles
      Style.all.each do |style|
        style.delete if style.payams.empty? && style.protected == false
      end
    end


end
