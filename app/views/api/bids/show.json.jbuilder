if @bid
    json.partial! "api/bids/bid", bid: @bid
end