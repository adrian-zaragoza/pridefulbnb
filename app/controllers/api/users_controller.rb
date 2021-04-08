class Api::UsersController < ApplicationController
  before_action :underscore_params!

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name,
      :birth_date, :current_location, :phone_number, :gender, :identity)
  end


end
