# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string(1)        not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Cat < ApplicationRecord
  require 'date'

  COLORS = %w(brown orange white black)

  validates :birth_date, :color, :name, :sex, :description, presence: true
  validates :sex, inclusion: { in: %w(M F) }
  validates :color, inclusion: { in: COLORS }

  def age
    birth = self.birth_date # <Date: 2001-02-03 ...>
    birth.year
    current = DateTime.now
    age = current.year - birth.year
  end

   has_many :requests,
        foreign_key: :cat_id,
        class_name: :CatRentalRequest,
        dependent: :destroy

end
