class LinesController < ApplicationController
    # before_action byebug :check_word_count, only: [:create]
    before_action :set_line, only: [:show]

    def index
        lines = Line.where("payam_id = ?", params[:payam_id])
        render json: lines
    end 

    def new
        @line = Line.new
    end

    def create
        @line = Line.create(line_params)
        redirect_to root_path
    end

    def show
    end

    private

    def set_line
        @line = Line.find(:id)
    end

    def line_params
        params.require(:line).permit(:text, :count, :auth_id, :payam_id, :auth_public)
    end

    #check if a line has between 10-20 words#
    # def check_word_count
    #   if @line.text.scan(/[[:alpha:]]+/).count < 10
    #     flash[:alert] = "That's too few words"
    #     redirect_to payam_path(Payam.find(:id))
    #   elsif @line.text.scan(/[[:alpha:]]+/).count > 20
    #     flash[:alert] = "That's too many words"
    #     redirect_to payam_path(Payam.find(:id))
    #   end
    # end



end
