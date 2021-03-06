class Payam < ApplicationRecord
    has_many :lines, dependent: :destroy
    belongs_to :style
    has_many :users, through: :lines, source: :auth 
    has_many :decomps, :class_name => "Payam", :foreign_key => "orig" 
    belongs_to :original, :class_name => "Payam", :foreign_key => "orig"
    accepts_nested_attributes_for :style, reject_if: proc { |attributes| attributes['name'].blank? }
    validates :title, presence: true, length: {maximum: 40}
    validates_with TitleValidator
    scope :completed, -> { where(:current_scribe => nil) }
    scope :not_completed, -> { where.not(:current_scribe => nil) } 

    # For displaying the last 5 words of the last line added to a payam(payam)
    def previous_five
        newln = Line.where(:payam_id => self.id, :count => self.counter-1).first
        lastlinetext = newln.text
        lastline = lastlinetext.split
        lastline[-5..-1].join(" ")
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

    def sorted_lines
        sorted_lines = Line.select {|line| line.payam_id == self.id}.sort_by {|lin| lin.count} 
        end


    def first_user
        if self.users
            User.find(self.users.first.id).username
        end
    end

    def when_created
        DateTime.parse((self.created_at).to_s)
    end

    def current_scribe_username
        if self.current_scribe
            User.find(current_scribe).username
        end
    end

    private

    def style=(name)
        self.style = Style.find_or_create_by(name)
    end

end
