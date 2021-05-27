class Api::BookingsController < ApplicationController
  before_action :underscore_params!
  
  def index
    debugger
    @bookings = Booking.where(traveler_id: current_user.id)
    ids = @bookings.pluck(:place_id)
    @places = Place.with_attached_images.where('id IN (?)', ids)

  end

  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      render json: ["Your booking was a sucess!"], status: 200
    else
      render json: @booking.errors.full_messages, status: 404
    end
  end

  def destroy
    @booking = Booking.find_by(id: params[:id])

    if @booking && current_user.id == @booking.traveler_id
      @booking.destroy
    else
      render json: ["You cannot delete this place"], status: 404
    end
  end

  private
  def booking_params
    params.require(:booking).permit(:traveler_id, :start_stay, :end_stay, :num_guests, :total_cost, :place_id)
  end

end
