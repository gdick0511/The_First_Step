class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :user, :comments
  has_one :user
  # has_many :comments

  def comments
    ActiveModel::SerializableResource.new(object.comments, each_serializer: CommentSerializer)
  end

end
