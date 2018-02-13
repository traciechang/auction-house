class Api::AuctionsController < ApplicationController
    def index
        @auctions = Auction.all
    end

    def create
        @auction = Auction.new(auction_params)

        if @auction.save
            render :show
        else
            render json: @auction, status: :unprocessable_entity
        end
    end

    private
    def auction_params
        params.require(:auction).permit(:user_id, :inventory_item_id, :starting_bid, :buyout, :duration)
    end
end
