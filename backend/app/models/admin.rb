class Admin < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :rememberable, :validatable

  enum role: { manager: "manager", editor: "editor" }
  enum active: { active: true, inactive: false }
end
