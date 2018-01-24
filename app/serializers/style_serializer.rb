class StyleSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :payams
end
