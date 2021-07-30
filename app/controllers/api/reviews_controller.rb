class Api::ReviewsController < ApplicationController
  before_action :underscore_params!

  def index
    @reviews = Review.where(place_id: params[:place_id])

    render :index
  end

  def show
      @review = Review.find_by(id: params[:id])
    if @review
      render :show
    else
      render json: ["This review does not exist."], status: 404
    end
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 404
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])

    if @review && current_user.id == @review.author_id
      @review.destroy
    else
      render json: ["You are not allowed to delete this review"], status: 401
    end
  end

  private
  def review_params
    params.require(:review).permit(:body, :author_id, :place_id, :booking_id)
  end
end
