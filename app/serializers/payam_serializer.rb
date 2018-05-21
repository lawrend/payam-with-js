class PayamSerializer < ActiveModel::Serializer
  attributes :current_scribe, :created_at, :id, :title, :orig, :decomp, :counter, :stylee, :first_user, :current_scribe_username
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

  def created_at
      object.when_created
  end

end
