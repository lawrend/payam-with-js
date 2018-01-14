class Payam < ApplicationRecord
  has_many :lines, dependent: :destroy
  belongs_to :style
  has_many :users, through: :lines, source: :auth
  #accepts_nested_attributes_for :lines
  accepts_nested_attributes_for :style, reject_if: proc { |attributes| attributes['name'].blank? }
  validates :title, presence: true, length: {maximum: 40}
  validates_with TitleValidator
  scope :completed, -> { where(:current_scribe => nil) }

  # For displaying the last 5 words of the last line added to a payam(payam)
  def previous_five
    newln = Line.where(:payam_id => self.id, :count => self.counter-1).first
    lstln = newln.text
    llstln = lstln.split
    llstln[-5..-1].join(" ")
  end

  def send_to_next
    self.counter += 1
    self.save
  end

  def set_line_count
    self.lines.last.count = self.counter
  end

  def lines_attributes=(line_attributes)
    self.lines.build(:text => line_attributes["0"][:text], :count => self.counter, :auth_id => line_attributes["0"][:auth_id] ||= [])
  end

  private

  def style=(name)
    self.style = Style.find_or_create_by(name)
  end




end
