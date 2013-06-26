Catdog::Application.routes.draw do

  scope :module => :web do

    root :to => 'welcome#show'

  end


end
