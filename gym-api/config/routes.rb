Rails.application.routes.draw do
  devise_for :users,
             path: 'auth',
             path_names: {
               sign_in: 'login',
               sign_out: 'logout',
               registration: 'signup'
             },
             controllers: {
               sessions: 'users/sessions',
               registrations: 'users/registrations'
             },
             defaults: { format: :json }

  namespace :api do
    get '/me', to: 'users#me'
    resources :things, only: %i[index create]
  end
end
