# require 'rails_helper'

# RSpec.describe AuctionSearch do
#     describe "#execute" do
#         it "searches by level" do
#             item_1 = Auction.create(item_level: 1)
#             item_2 = Auction.create(item_level: 3)
#             item_3 = Auction.create(item_level: 6)

#             actual = AuctionSearch.new(item_level: 5).execute
#             expectation = [item_1, item_2]

#             expect(actual).to eq(expectation)
#         end

#         it "searches by rarity" do
#             item_1 = Auction.create(rarity: 1)
#             item_2 = Auction.create(rarity: 3)
#             item_3 = Auction.create(rarity: 6)

#             actual = AuctionSearch.new(rarity: 2).execute
#             expectation = [item_1]

#             expect(actual).to eq(expectation)
#         end

#     end

#     describe "POST /auctions" do
#         it "creates and auction" do
#             params = {
#                 user_id: 1,
#                 auction: {
#                     # ....
#                 }
#             }

#             post "/auctions", params: params, headers: headers

#             expect(Auction.count).to eq(1)
#             expect {
#                 post "/auctions", params: params, headers: headers
#             }.to change { Auction.count }.by(1)
#         end
#     end
# end