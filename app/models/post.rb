class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, as: :commentable


  validates :body, presence: true
  validates :subject, presence: true
end
