class AddUsernameAndRemoveNameAndEmailFromUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :username, :string, null: false
    remove_column :users, :name
    remove_column :users, :email

    add_index :users, :username, unique: true
  end
end
