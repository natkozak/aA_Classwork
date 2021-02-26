class AddAuthorIdToComments < ActiveRecord::Migration[5.2]
  def change
    rename_column :comments, :user_id, :author_id
    # remove_index :comments, name: "index_comments_on_user_id_and_artwork_id_and_body"
    # remove_index :comments, name: "index_comments_on_user_id"

    # add_index :comments, :author_id
    # add_index :comments, [:author_id, :artwork_id, :body], unique: true
  end
end
