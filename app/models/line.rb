class Line < ApplicationRecord
  belongs_to :auth, :class_name => "User"
  belongs_to :corpse, optional: true
  validates :text, presence: true, length: {maximum: 200}
  validate :word_count, unless: Proc.new {|a| a.corpse != nil && a.corpse.current_scribe.nil? } #the exception allows decompose to reduce word count below 10

  def lose_word
    if self.text.split.length > 1
      prev_line = self.text.split
      prev_line.delete_at(rand(prev_line.length))
      self.text = prev_line.join(" ")
      self.save
    end
  end

  private

  def word_count
    @count = text.scan(/[[:alpha:]]+/).count
    if @count < 10
      errors.add(:text, "That's #{10 - @count} too few words for the line.")
    elsif @count > 20
      errors.add(:text, "That's #{@count - 20} too many words for the line.")
    end
  end


end
