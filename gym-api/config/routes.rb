Rails.application.routes.draw do
  namespace :api do
    resources :things, only: %i[index create]
  end
end
