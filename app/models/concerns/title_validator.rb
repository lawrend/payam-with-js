class TitleValidator < ActiveModel::Validator

  def validate(record)
    if record.title.split.size > 1
        record.errors.add(:title, "Your title is too long. Remember--One Word.")
      end
    end

  end
