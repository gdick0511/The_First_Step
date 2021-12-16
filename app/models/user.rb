class User < ApplicationRecord
    has_secure_password

    has_many :posts 
    has_many :user_comments, class_name: "Comment"
    has_many :comments, through: :posts

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, length: { in: 4..24 }, on: :create
end

