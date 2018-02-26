class Api::BidsController < ApplicationController
    def create
        @bid = Bid.new(bid_params)

        if @bid.save
            ActionCable.server.broadcast 'auction_channel',
                amount: @bid.amount
            # render :show
        else
            render json: @bid, status: :unprocessable_entity
        end
    end

    private
    def bid_params
        params.require(:bid).permit(:user_id, :auction_id, :amount)
    end
end
