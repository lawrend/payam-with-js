class PayamSerializer < ActiveModel::Serializer
  attributes :id, :title
  belongs_to :player
  has_many :lines
  belongs_to :style
end
