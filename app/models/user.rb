class User < ApplicationRecord
    has_many :posts 
    has_many :user_comments, source: :comment
    has_many :comments, through: :posts
end
