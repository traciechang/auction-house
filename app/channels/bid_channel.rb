class BidChannel < ApplicationCable::Channel
  def subscribed
    stream_from "bid_channel"
  end

  def unsubscribed
  end

  def receive
  end
end
