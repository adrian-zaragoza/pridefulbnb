class Api::PlacesController < ApplicationController
  def index
    @places = Place.all

    render :index
  end

  def show
    @place = Place.find_by(id: params[:id])
    if @place
      render :show
    else
      render json: ["This place does not exist."], status: 404
    end
  end

  def create
    @place = Place.new(place_params)

    if @place && @place.save
      render :show
    else
      render json: @place.errors.full_messages, status: 404
    end
  end

  def edit
    @place = Place.find_by(id: params[:id])
    render :edit
  end

  def update
    @place = Place.find_by(id: params[:id])

    if @place && current_user.id == @place.owner_id && @place.update(place_params)   
      render :show
    else
      render json: @place.errors.full_messages, status: 404
    end
  end

  def destroy
    @place = Place.find_by(id: params[:id])
    
    if @place && current_user.id == @place.id
      @place.delete
    else
      render json: ["You cannot delete this place"]
    end

  end

  private
  def place_params
    params.require(:place).permit(:title, :location, :type_of_place, :max_guests, :num_of_bedrooms, 
                                  :num_of_bathrooms, :num_of_beds, :about, :nearby_attractions, :rules,
                                  :price_per_day, :cancellation_policy, :check_in_from, :check_out_before,
                                  :owner_id
                                )
  end
end
