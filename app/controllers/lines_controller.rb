class LinesController < ApplicationController
  before_action :check_word_count, only: [:create]
  before_action :set_line, only: [:show]

  def new
    @line = Line.new
  end

  def create
    @line = Line.create(line_params)
    redirect_to root_path
  end

  private

  def set_line
    @line = Line.find(:id)
  end

  def line_params
    params.require(:line).permit(:text, :count, :auth_id, :corpse_id, :auth_public)
  end

  #check if a line has between 10-20 words#
  def check_word_count
    if @line.text.scan(/[[:alpha:]]+/).count < 10
      flash[:alert] = "That's too few words"
      redirect_to corpse_path(Corpse.find(:id))
    elsif @line.text.scan(/[[:alpha:]]+/).count > 20
      flash[:alert] = "That's too many words"
      redirect_to corpse_path(Corpse.find(:id))
    end
  end



end
