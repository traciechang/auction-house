class AuctionChannel < ApplicationCable::Channel
  def subscribed
    stream_from "auction_channel"
  end

  def unsubscribed
  end

  def receive
  end
end
