class PayamSerializer < ActiveModel::Serializer
  attributes :id, :title, :orig, :decomp, :counter, :stylee, :first_user
  has_many :lines
  belongs_to :style

  def stylee
      object.style_id
  end

  def first_user
      object.first_user
  end

end
