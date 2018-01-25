class PayamSerializer < ActiveModel::Serializer
  attributes :id, :title, :current_scribe
  has_many :lines, serializer: PayamLineSerializer
  belongs_to :style
end
