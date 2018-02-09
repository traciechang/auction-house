# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "pusheen", password: "pusheen")
User.create(username: "stormy", password: "stormy")
User.create(username: "pip", password: "pippip")

Item.create(name: "Ripe Okra", quality: "Poor", level: 10, item_type: "Junk", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518131157/inv_misc_herb_09.jpg")
Item.create(name: "Dented Triptych Shield", quality: "Poor", level: 110, item_type: "Shield", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518130098/inv_shield_31.jpg")


Inventory.create(user_id: 1, gold: 1000)
# Inventory.create(user_id: 1, gold: 1000)
# Inventory.create(user_id: 1, gold: 1000)

InventoryItem.create(item_id: 1, inventory_id: 1)

Auction.create(user_id: 1, item_id:1, starting_bid: 1, buyout: 20, duration: 1)

Bid.create(user_id: 2, auction_id: 1, amount: 2)
Bid.create(user_id: 3, auction_id: 1, amount: 1)