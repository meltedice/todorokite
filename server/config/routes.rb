Rails.application.routes.draw do
  namespace :v1 do
    resources :items, defaults: { format: 'json' } do
      resource :completion, only: [:update, :destroy], module: 'items'
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
