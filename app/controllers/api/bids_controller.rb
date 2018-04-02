class Api::BidsController < ApplicationController
    def create
        @bid = Bid.new(bid_params)

        if @bid.save
            ActionCable.server.broadcast 'auction_channel',
                amount: @bid.amount,
                auction_id: @bid.auction_id
        else
            render json: @bid, status: :unprocessable_entity
        end
    end

    # Get current user's 2nd to last bid for an auction, if it exists, to determine how much deposit is taken
    def show
        @bid = current_user.bids.where(auction_id: params[:auction_id]).order(amount: :desc).offset(1).first
    end

    private
    def bid_params
        params.require(:bid).permit(:user_id, :auction_id, :amount)
    end
end
