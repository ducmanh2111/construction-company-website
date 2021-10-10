class CreateRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :rooms do |t|
      t.references :room_category, foreign_key: true
      t.references :house, foreign_key: true, null: false

      t.float :area, null: false
      t.integer :door, default: 0, null: false
      t.integer :window, default: 0, null: false
      t.string :door_direction, null: false

      t.timestamps
    end
  end
end
