class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, as: :commentable


  validates :body, presence: true, length: {minimum: 1}
  validates :subject, presence: true, length: {minimum: 1}
end
