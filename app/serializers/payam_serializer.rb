class PayamSerializer < ActiveModel::Serializer
  attributes :id, :title, :orig, :decomp, :counter, :stylee
  has_many :lines
  belongs_to :style

  def stylee
      object.style_id
  end

end
