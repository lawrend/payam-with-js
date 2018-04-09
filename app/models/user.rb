class User < ApplicationRecord
    # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :validatable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :omniauthable, :omniauth_providers => [:github]
  validates_uniqueness_of :username
  has_many :lines, :foreign_key => "auth_id"
  has_many :payams, through: :lines

  def self.find_for_oauth(auth)
    user = User.where(uid: auth.uid, provider: auth.provider).first
    unless user
      user = User.create(
        uid:      auth.uid,
        provider: auth.provider,
        email:    User.dummy_email(auth),
        password: Devise.friendly_token[0, 20]
      )
    end
    user
  end

  def self.new_with_session(params, session)
   super.tap do |user|
     if data = session["devise.github_data"] && session["devise.github_data"]["extra"]["raw_info"]
       user.email = data["email"] if user.email.blank?
     end
   end
  end

  def unfinished_payams
      self.payams.not_completed.distinct
  end

  def unfinished_originals
      Payam.not_completed.select do |p| 
          p.users.first.id == self.id
      end
  end

  def finished_payams
      self.payams.completed.distinct
  end

  def decomps
      self.finished_payams.where(decomp: true)
  end

  def finished_originals
      self.finished_payams.where(decomp: false)
  end

  def waiting
    Payam.where(:current_scribe => self.id)
  end

  private

  def self.dummy_email(auth)
    "#{auth.uid}-#{auth.provider}@example.com"
  end

end
