class CreateSubs < ActiveRecord::Migration[5.2]
  def change
    create_table :subs do |t|
      t.string :title
      t.text :description
      t.integer :owner_id
      t.timestamps
    end

    add_index :subs, :owner_id
  end
end
