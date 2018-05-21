class LinesController < ApplicationController
	before_action :authenticate_user!
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
        params.require(:line).permit(:text, :count, :auth_id, :payam_id, 
                                     :auth_public)
    end

end
