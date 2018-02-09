class Api::AuctionsController < ApplicationController
    def index
        @auctions = Auction.all
    end

    def create
    end

    private
    def auction_params
    end
end
