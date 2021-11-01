class Room < ApplicationRecord
  include Rails.application.routes.url_helpers

  belongs_to :room_category, optional: true
  belongs_to :house

  validates :house_id, presence: true
  validates :area, presence: true, numericality: true
  validates :door, presence: true, numericality: true
  validates :window, presence: true, numericality: true
  validates :door_direction, presence: true

  has_many_attached :image

  delegate :name, to: :room_category, prefix: true, allow_nil: true
  delegate :name, to: :house, prefix: true, allow_nil: true

  scope :by_room_category, ->(room_category_id) { where(room_category_id: room_category_id) }

  def name
    "#{house_name}-#{door_direction}"
  end

  def image_url
    image_attachments.map do |attach|
      rails_blob_path(attach, only_path: true)
    end
  end
end
