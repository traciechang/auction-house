class AuctionChannel < ApplicationCable::Channel
  def subscribed
    stream_from "auction_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive
    puts "In auction channel"
    binding.pry
  end
end
