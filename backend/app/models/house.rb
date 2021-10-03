class House < ApplicationRecord
  belongs_to :house_category

  validates :name, presence: true
  validates :address, presence: true
  validates :floors, presence: true
  validates :area, presence: true
end
