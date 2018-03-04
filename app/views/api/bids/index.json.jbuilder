@bids.each do |bid|
    json.set! bid.id do
        json.partial! "bid", bid: bid
    end
end