class PlayersController < ApplicationController
	before_action :authenticate_user!
	before_action :set_player, only: [:show, :update, :edit, :outstanding_originals]

	def index
	end

	def show
        # @completes = @player.finished_payams
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

    def outstanding_originals
        @originals = @player.unfinished_originals
        render json: @originals
    end


	private

	def set_player
	  @player = User.find(current_user.id)
	end

	def player_params
		params.require(:player)
	end

end
