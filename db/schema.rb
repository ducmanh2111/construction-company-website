# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_10_002323) do

  create_table "admins", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.string "user_name", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.boolean "active", default: false
    t.string "role", null: false
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_name"], name: "index_admins_on_user_name", unique: true
  end

  create_table "house_categories", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.string "name", null: false
    t.index ["name"], name: "index_house_categories_on_name", unique: true
  end

  create_table "houses", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.bigint "house_category_id"
    t.string "name", null: false
    t.string "address", null: false
    t.integer "floors", limit: 2, null: false
    t.integer "year", limit: 2
    t.string "country"
    t.boolean "status", default: true
    t.text "description"
    t.float "area", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["house_category_id"], name: "index_houses_on_house_category_id"
  end

  create_table "refresh_tokens", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.string "crypted_token"
    t.string "old_token"
    t.bigint "admin_id", null: false
    t.datetime "exp"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["admin_id"], name: "index_refresh_tokens_on_admin_id"
    t.index ["crypted_token"], name: "index_refresh_tokens_on_crypted_token", unique: true
  end

  create_table "room_categories", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.string "name", null: false
    t.index ["name"], name: "index_room_categories_on_name", unique: true
  end

  create_table "rooms", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.bigint "room_category_id"
    t.bigint "house_id", null: false
    t.float "area", null: false
    t.integer "door", default: 0, null: false
    t.integer "window", default: 0, null: false
    t.string "door_direction", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["house_id"], name: "index_rooms_on_house_id"
    t.index ["room_category_id"], name: "index_rooms_on_room_category_id"
  end

  add_foreign_key "houses", "house_categories"
  add_foreign_key "refresh_tokens", "admins"
  add_foreign_key "rooms", "houses"
  add_foreign_key "rooms", "room_categories"
end
