require 'tdd_project'

describe Array do
  describe "#my_uniq" do
    it "should remove duplicates" do 
      expect([1, 2, 1, 3, 3].my_uniq).to eq([1,2,3])
    end
  end

  describe "#two_sum" do
    it "should return indexes of pairs where elements sum to zero" do
      expect([-1, 0, 2, -2, 1].two_sum).to eq([[0, 4], [2, 3]])
    end
  end 
end

describe "my_transpose" do
  subject(:rows) { rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]
}
  it "should return transposed version of the matrix" do
    expect(transpose(rows)).to eq([
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ])
  end

  it "should not mutate the original array" do
    expect(rows).to eq([
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ])

  end
end