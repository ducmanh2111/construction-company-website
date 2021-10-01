class CreateRefreshTokens < ActiveRecord::Migration[6.0]
  def change
    create_table :refresh_tokens do |t|
      t.string :crypted_token
      t.string :old_token
      t.belongs_to :admin, null: false, foreign_key: true
      t.datetime :exp

      t.timestamps
    end
    add_index :refresh_tokens, :crypted_token, unique: true
  end
end
