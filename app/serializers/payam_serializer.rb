class PayamSerializer < ActiveModel::Serializer
  attributes :id, :title, :current_scribe
  has_many :lines
  belongs_to :style
end
