class User < ApplicationRecord
    has_many :posts 
    has_many :user_comments, class_name: "Comment"
    has_many :comments, through: :posts
end
