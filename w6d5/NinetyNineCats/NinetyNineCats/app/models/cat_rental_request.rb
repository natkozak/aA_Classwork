# == Schema Information
#
# Table name: cat_rental_requests
#
#  id         :bigint           not null, primary key
#  cat_id     :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  status     :string           default("PENDING"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CatRentalRequest < ApplicationRecord
    validates :cat_id, :start_date, :end_date, :status, presence: true
    validates :status, inclusion:  { in: %w(APPROVED PENDING DENIED) }

    belongs_to :cat,
        foreign_key: :cat_id,
        class_name: :Cat

    def overlapping_requests
        CatRentalRequest    
            .select(:id)
            .where("cat_id = ?",self.cat_id)
            .where("(start_date between ? and ?) or (end_date between ? and ?)", self.start_date, self.end_date, self.start_date, self.end_date)
            .where.not("id = ?", self.id)
    end
end
