class Api::PlacesController < ApplicationController
  before_action :underscore_params!

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
    @place = Place.new(place_params.reject { |key| key["images"] })

    if place_params[:images].present? && place_params[:images].length > 5
      @place.errors.add(:base, "Maximum of 5 images can be uploaded") 
    end

    if !place_params[:images].present?
      @place.errors.add(:base, "Please attach at least 1 image") 
    end

    if @place
      if place_params[:images].present? && place_params[:images].length <= 5 && @place.save
        place_params[:images].each do |image|
          @place.images.attach(image)
        end
        render :show

      elsif place_params[:images].present? && @place.save
        render :show
      
      else
        render json: @place.errors.full_messages, status: 404
      end

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
    
    if @place && current_user.id == @place.owner_id && @place.update(place_params.reject { |key| key["images"] })   
      if place_params[:images].present?
        i = 0
        while @place.images.length < 5
           @place.images.attach(place_params[:images][i])
           i += 1
        end
      end
      render :show
    else
      render json: @place.errors.full_messages, status: 404
    end
  end

  def destroy
    @place = Place.find_by(id: params[:id])
    
    if @place && current_user.id == @place.owner_id
      @place.images.purge
      @place.delete
    else
      render json: ["You cannot delete this place"], status: 404
    end

  end

  private
  def place_params
    params.require(:place).permit(:title, :location, :type_of_place, :max_guests, :num_of_bedrooms, :id,
                                  :num_of_bathrooms, :num_of_beds, :about, :nearby_attractions, :rules,
                                  :price_per_day, :cancellation_policy, :check_in_from, :check_out_before,
                                  :owner_id, images: []
                                )
  end
end
