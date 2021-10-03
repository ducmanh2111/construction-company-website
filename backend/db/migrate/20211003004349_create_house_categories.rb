class CreateHouseCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :house_categories do |t|
      t.string :name, null: false, unique: true
    end
    add_index :house_categories, :name, unique: true
  end
end
