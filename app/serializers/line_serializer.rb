class LineSerializer < ActiveModel::Serializer
  attributes :id, :text, :count
  belongs_to :payam
  belongs_to :player
end

