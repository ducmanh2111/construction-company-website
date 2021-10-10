class RoomCategory < ApplicationRecord
  has_many :rooms

  validates :name, presence: true, uniqueness: { case_sensitive: true }
end
