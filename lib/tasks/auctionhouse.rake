namespace :auctionhouse do
    desc "Check for ended and unpaid auctions"
    task check_ended_auctions: :environment do
        auctions = Auction.where("end_time <= ?", Time.now).where(paid: false)

        auctions.each do |auction|
            
        end
    end
end