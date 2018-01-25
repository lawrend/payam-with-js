class PlayersController < ApplicationController
	before_action :authenticate_user!
	before_action :set_player, only: [:show, :update, :edit]

	def index
	end

	def show
        respond_to do |format|
            format.html {render :show}
            format.json {render json: @player}
        end
	end

	def update
		@player.update(player_params)
		redirect_to player_path(@player)
	end

	def edit
	end

	private

	def set_player
	  @player = User.find(current_user.id)
	end

	def player_params
		params.require(:player)
	end

end
