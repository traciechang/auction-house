class Api::BidsController < ApplicationController
    def create
        @bid = Bid.new(bid_params)

        if @bid.save
            ActionCable.server.broadcast 'auction_channel',
                amount: @bid.amount,
                auction_id: @bid.auction_id
            # render :show
        else
            render json: @bid, status: :unprocessable_entity
        end
    end

    # purpose is to get current user's 2nd to last bid for a particular auction, if it exists, to determine how much deposit is taken
    def show
        # this got the 3rd to last, not sure why
        # binding.pry
        @bid = current_user.bids.where(auction_id: params[:auction_id]).order(amount: :desc).offset(1).first
        # @bid = current_user.bids.where(auction_id: params[:auction_id]).last
    end

    # used to disperse deposits back to bidders who did not win
    # don't need this cuz ur doing thru rake tasks on back end
    # def index
    #     bidder_ids = Bid.where(auction_id: params[:auction_id]).pluck(:user_id).uniq
    #     @bids = bidder_ids.map do |id|
    #         User.find(id).bids.where(auction_id: params[:auction_id]).order(:amount).last
    #     end
    # end

    private
    def bid_params
        params.require(:bid).permit(:user_id, :auction_id, :amount)
    end
end
