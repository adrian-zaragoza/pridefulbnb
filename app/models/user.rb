class User < ApplicationRecord
  validates :email, :password_digest, :session_token, :first_name, :last_name, 
    :birth_date, :current_location, :phone_number, :gender, :identity, presence: true
  validates :email, :session_token, uniqueness: true
  # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
  validates :phone_number, numericality: true
  validates :phone_number, length: { is: 10}
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password
  after_initialize :ensure_session_token

  has_many :places,
    foreign_key: :owner_id,
    class_name: "Place"

  has_many :bookings,
    foreign_key: :traveler_id,
    class_name: "Booking"

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    if user && user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
