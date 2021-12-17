class PostsController < ApplicationController

    def index 
        all_post = Post.all 
        render json: all_post
    end
end
