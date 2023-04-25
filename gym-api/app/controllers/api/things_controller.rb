module Api
  class ThingsController < ApplicationController
    # GET /api/games
    def index
      render json: { things: Thing.all }
    end

    def create
      @new_thing = Thing.new(things_params)

      if @new_thing.save
        render json: { thing: @new_thing }, status: :created
      else
        render_json_error(@new_thing.errors)
      end
    end

    private

    def things_params
      params.require(:thing)
            .permit(:text)
    end
  end
end
