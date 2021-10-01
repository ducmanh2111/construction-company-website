class Admin < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :rememberable, :validatable, authentication_keys: [:login]

  has_one :refresh_token, dependent: :destroy

  enum role: { manager: "manager", editor: "editor" }
  enum active: { active: true, inactive: false }

  attr_writer :login

  def login
    @login || user_name
  end

  def self.find_for_database_authentication(warden_conditions)
    conditions = warden_conditions.dup
    if (login = conditions.delete(:login))
      where(conditions.to_h).find_by(["lower(user_name) = :value", { value: login.downcase }])
    elsif conditions.key?(:user_name)
      find_by(conditions.to_h)
    end
  end
end
