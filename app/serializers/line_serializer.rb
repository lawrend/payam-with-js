class LineSerializer < ActiveModel::Serializer
  attributes :id, :text, :count, :payam_id, :auth_id
  belongs_to :payam
end

