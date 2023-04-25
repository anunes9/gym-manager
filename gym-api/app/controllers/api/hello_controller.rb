module Api
  class HelloController < ApplicationController
    # GET /api/games
    def index
      render json: { "data": 'hello' }
    end
  end
end
