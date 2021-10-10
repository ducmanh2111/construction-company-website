class Room < ApplicationRecord
  belongs_to :room_category, optional: true
  belongs_to :house

  validates :house_id, presence: true
  validates :area, presence: true, numericality: true
  validates :door, presence: true, numericality: true
  validates :window, presence: true, numericality: true
  validates :door_direction, presence: true

  delegate :name, to: :room_category, prefix: true, allow_nil: true
  delegate :name, to: :house, prefix: true, allow_nil: true

  def name
    "#{house_name}-#{door_direction}"
  end
end
