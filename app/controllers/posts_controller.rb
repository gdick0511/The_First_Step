class PostsController < ApplicationController

    def index 
        all_post = Post.all 
        render json: all_post, status: :ok
    end

    def create 
        new_post = Post.create(user_params)
        render json: new_post, status: :created
    end

    def destroy
        deleted_post = Post.find_by(id: params[:id])
        deleted_post.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:subject, :body, :user_id)
    end

end
