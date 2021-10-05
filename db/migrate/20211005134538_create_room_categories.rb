class CreateRoomCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :room_categories do |t|
      t.string :name, null: false, unique: true
    end
    add_index :room_categories, :name, unique: true
  end
end
