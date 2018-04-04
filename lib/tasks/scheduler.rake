namespace :scheduler do
    desc "Check for ended and unpaid auctions"
    task check_ended_auctions: :environment do
        auctions = Auction.where("end_time <= ?", Time.now).where(paid: false)

        auctions.each do |auction|
            inventory_item = InventoryItem.find(auction.inventory_item_id)
            winning_bid = auction.bids.last
            seller = User.find(auction.user_id)
            seller_gold_old = seller.inventory.gold

            if winning_bid
                buyer = User.find(winning_bid.user_id)
                buyer_gold_old = buyer.inventory.gold
            end

            # if the item was not sold:
            if auction.bids == []
                # inv item is put back into seller's inv
                inventory_item.update({for_sale: false})
                
                # auction is marked as "paid" so that it won't be checked again
                auction.update({paid: true})
            else
                # inv item goes to buyer
                inventory_item.update({inventory_id: winning_bid.user_id, for_sale: false})

                # highest bid amount added to seller's gold
                seller.inventory.update({gold: seller_gold_old + winning_bid.amount})

                # auction is marked as paid
                auction.update({paid: true, duration: 0})

                # disperse deposits back to non winners
                # winner's deposit is not returned
                bidder_ids = auction.bids.where.not(user_id: buyer.id).pluck(:user_id).uniq

                bidder_ids.each do |bidder_id|
                    bidder = User.find(bidder_id)

                    last_bid = bidder.bids.where(auction_id: auction.id).order(:amount).last

                    bidder.inventory.update({gold: bidder.inventory.gold + last_bid.amount})
                end
            end
        end
    end
end