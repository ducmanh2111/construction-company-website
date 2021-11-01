class House < ApplicationRecord
  include Rails.application.routes.url_helpers

  belongs_to :house_category
  has_many :rooms, dependent: :delete_all

  validates :name, presence: true
  validates :address, presence: true
  validates :floors, presence: true
  validates :area, presence: true

  has_many_attached :image

  delegate :name, to: :house_category, prefix: true, allow_nil: true

  scope :by_house_category, ->(house_category_id) { where(house_category_id: house_category_id) }

  def image_url
    image_attachments.map do |attach|
      rails_blob_path(attach, only_path: true)
    end
  end
end
