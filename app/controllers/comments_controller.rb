class CommentsController < ApplicationController

    def index 
        all_comments = Comment.all 
        render json: all_comments, status: :ok 
    end

    def create 
        new_comment = Comment.create!(comment_params)
        render json: new_comment, status: :created
    end



    private

    def comment_params
        params.permit(:body, :commentable_type, :commentable_id, :user_id)
    end
end
