class Sub < ApplicationRecord
  validates :owner_id, :title, presence: true
  #todo: migrate index for title to force unique titles


  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  has_many :posts,
    foreign_key: :sub_id,
    class_name: :Post

end
