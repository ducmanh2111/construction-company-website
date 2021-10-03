class CreateHouses < ActiveRecord::Migration[6.0]
  def change
    create_table :houses do |t|
      t.references :house_category, foreign_key: true
      t.string :name, null: false
      t.string :address, null: false
      t.integer :floors, limit: 2, null: false
      t.integer :year, limit: 2
      t.string :country
      t.boolean :status, default: true
      t.text :description
      t.float :area, null: false

      t.timestamps
    end
  end
end
