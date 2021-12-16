class QuotesController < ApplicationController

    def index 

        url = 'https://zenquotes.io/api/today'

        response = RestClient.get(url)

        the_quote = JSON.parse(response)

        render json: {quote: the_quote}

    end
end
