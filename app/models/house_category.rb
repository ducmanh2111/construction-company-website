class HouseCategory < ApplicationRecord
  has_many :houses

  validates :name, presence: true, uniqueness: { case_sensitive: true }
end
