class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
      login!(@user)
      render 'api/users/show';
    else
      render json: ["Invalid username/password combination"], status: 404
    end

  end

  def destroy
    logout!
    render json: ["user has logged out"], status: 200
  end
end
