class CreateThings < ActiveRecord::Migration[7.0]
  def change
    create_table :things do |t|
      t.string :text

      t.timestamps
    end
  end
end