class PostSerializer < ActiveModel::Serializer
  attributes :id, :subject, :body
  has_one :user
end
