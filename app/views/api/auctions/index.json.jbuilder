@auctions.each do |auction|
    json.set! auction.id do
        json.partial! "auction", auction: auction
    end
end