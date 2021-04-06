class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
      login!(@user)
      render 'api/users/show';
    end
  end

  def destroy
    logout!
  end
end
