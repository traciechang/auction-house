# README

[Live Site](https://warm-castle-35814.herokuapp.com)

![alt text](http://res.cloudinary.com/dcf4iyb6t/image/upload/v1525739909/auction%20house%20readme/ezgif.com-video-to-gif_copy.gif)

Based on the [Auction House](https://wow.gamepedia.com/Auction_House) in the World of Warcraft game, this remote auction house application allows users to search and bid on items, create auctions, and watch auctions in real time.

### Features
* Single page web application...
* Secure user authentication with `bcrypt` gem.
* Users can create auctions and search active auctions by name, item level, item quality, item type, or any combination thereof.
* Users can place unlimited bids throughout the duration of an auction.
* When a bid is placed, a deposit is taken from the bidder in the amount of the bid. If a user bids on the same auction multiple times, the difference between the user’s new bid and their previous bid is deducted.
* When a Buyout is selected, the auction immediately ends and the total buyout amount is deducted from the buyer’s account.
* ActionCable is used to implement WebSockets and allows users to watch bids update in real-time.
* Custom scheduled rake tasks check whether an item is sold and if so, changes the ownership of the item, deposits the winning bid amount into the seller’s account, and returns all bid deposits back to non-winners. 

### Code Spotlight
**ActionCable and WebSockets**

![alt text](http://res.cloudinary.com/dcf4iyb6t/image/upload/c_scale,w_496/v1525378160/auction%20house%20readme/ActionCable/bids_controller_create.png)
![alt text](http://res.cloudinary.com/dcf4iyb6t/image/upload/c_scale,w_496/v1525378151/auction%20house%20readme/ActionCable/auction_active_detail_componentDidMount.png)
![alt text](http://res.cloudinary.com/dcf4iyb6t/image/upload/c_scale,w_496/v1525378154/auction%20house%20readme/ActionCable/auction_active_detail_receiveNewBid.png)

**The Auction Search Algorithm**

![alt text](http://res.cloudinary.com/dcf4iyb6t/image/upload/c_scale,w_735/v1525714907/auction%20house%20readme/Search/auction_index.png)
![alt text](http://res.cloudinary.com/dcf4iyb6t/image/upload/c_scale,w_433/v1525714878/auction%20house%20readme/Search/AuctionService_call.png)
![alt text](http://res.cloudinary.com/dcf4iyb6t/image/upload/c_scale,w_515/v1525714878/auction%20house%20readme/Search/auction_scopes.png)

### ToDo
* Add a Watching feature to let users follow an auction without having to bid on it.
* Enhance user Profile with subsections for auctions that are Ending Soon and Recently Listed.
* Allow users to sort auctions by item Name, Level, Time Left, and Bid Amount.
