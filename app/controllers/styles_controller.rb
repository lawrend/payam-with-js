class StylesController < ApplicationController
  before_action :set_style, only: [:show, :update, :destroy, :edit]

  def index
    @styles = Style.all
  end

  def new
    @style = Style.new
  end

  def create
    @style = Style.create(style_params)
  end

  def update
    if @style.update(style_params)
      redirect_to root_path
    end
  end

  def show
  end

  private

  def set_style
    @style = Style.find(:id)
  end

  def style_params
    params.require(:style).permit(:name)
  end

end
