class LineSerializer < ActiveModel::Serializer 
    attributes :text, :count, :payam_id, :auth_id
    belongs_to :payam
    belongs_to :player

end
