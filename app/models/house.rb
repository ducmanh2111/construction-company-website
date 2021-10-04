class House < ApplicationRecord
  belongs_to :house_category

  validates :name, presence: true
  validates :address, presence: true
  validates :floors, presence: true
  validates :area, presence: true

  delegate :name, to: :house_category, prefix: true, allow_nil: true
end
