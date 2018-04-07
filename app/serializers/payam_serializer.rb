class PayamSerializer < ActiveModel::Serializer
  attributes :current_scribe, :id, :title, :orig, :decomp, :counter, :stylee, :first_user, :current_scribe_username
  has_many :lines
  belongs_to :style

  def stylee
      object.style_id
  end

  def first_user
      object.first_user
  end

  def current_scribe_username
      object.current_scribe_username
  end

end
