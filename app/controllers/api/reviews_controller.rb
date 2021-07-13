class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.where(place_id: params[:place_id])

    render :index
  end

  def create
  end

  def destroy
  end


end
