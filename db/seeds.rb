# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

pusheen = User.create(username: "pusheen", password: "pusheen")
User.create(username: "stormy", password: "stormy")
User.create(username: "pip", password: "pippip")
User.create(username: "ian", password: "ianian")

Item.create(name: "Flimsy Chain Gloves", quality: 0, level: 1, item_type: "Mail", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518155904/inv_gauntlets_04.jpg")
Item.create(name: "Feeble Sword", quality: 0, level: 3, item_type: "Sword", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518156301/inv_sword_04.jpg")
Item.create(name: "Withered Staff", quality: 0, level: 3, item_type: "Staff", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518156375/inv_staff_02.jpg")
Item.create(name: "Patchwork Pants", quality: 0, level: 3, item_type: "Cloth", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518155801/inv_pants_11.jpg")
Item.create(name: "Worn Leather Vest", quality: 0, level: 4, item_type: "Leather", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518148935/inv_shirt_05.jpg")
Item.create(name: "Loose Chain Vest", quality: 0, level: 5, item_type: "Mail", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518148721/inv_chest_chain.jpg")
Item.create(name: "Ragged Leather Boots", quality: 0, level: 4, item_type: "Leather", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518149569/inv_boots_06.jpg")
Item.create(name: "Rough Vulture Feathers", quality: 0, level: 10, item_type: "Junk", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518148686/spell_magic_featherfall.jpg")
Item.create(name: "Ripe Okra", quality: 0, level: 10, item_type: "Junk", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518131157/inv_misc_herb_09.jpg")
Item.create(name: "Interlaced Vest", quality: 0, level: 32, item_type: "Cloth", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518155761/inv_chest_cloth_40.jpg")
Item.create(name: "Hardened Leather Belt", quality: 0, level: 34, item_type: "Leather", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518155601/inv_belt_26.jpg")
Item.create(name: "Stone Club", quality: 0, level: 35, item_type: "Mace", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518149725/inv_mace_11.jpg")
Item.create(name: "Dented Triptych Shield", quality: 0, level: 110, item_type: "Shield", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518130098/inv_shield_31.jpg")

Item.create(name: "Mageweave Cloth", quality: 1, level: 1, item_type: "Reagent", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518157371/inv_fabric_mageweave_01.jpg")
Item.create(name: "Heavy Silken Thread", quality: 1, level: 40, item_type: "Reagent", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518157358/inv_fabric_silk_02.jpg")
Item.create(name: "Augmented Chain Vest", quality: 1, level: 32, item_type: "Mail", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518157343/inv_chest_plate12.jpg")
Item.create(name: "Netherweave Cloth", quality: 1, level: 60, item_type: "Reagent", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518157318/inv_fabric_netherweave.jpg")
Item.create(name: "Crystal Infused Leather", quality: 1, level: 60, item_type: "Reagent", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518157302/inv_misc_leatherscrap_12.jpg")
Item.create(name: "Massive Turkey Leg", quality: 1, level: 85, item_type: "Food", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518157287/inv_misc_food_18.jpg")
Item.create(name: "Draenic Warblade", quality: 1, level: 60, item_type: "Sword", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518157268/inv_sword_draenei_08.jpg")
Item.create(name: "Cured Medium Hide", quality: 1, level: 20, item_type: "Reagent", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518157207/inv_misc_pelt_bear_02.jpg")
Item.create(name: "Heavy Weave Belt", quality: 1, level: 12, item_type: "Cloth", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518157182/inv_belt_25.jpg")

Item.create(name: "Dwarven Tree Chopper", quality: 2, level: 20, item_type: "Axe", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518159827/inv_throwingaxe_01.jpg")
Item.create(name: "Wind Rider Staff", quality: 2, level: 20, item_type: "Staff", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518159810/inv_staff_goldfeathered_01.jpg")
Item.create(name: "Blue Overalls", quality: 2, level: 15, item_type: "Cloth", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518159790/inv_shirt_13.jpg")
Item.create(name: "Lesser Spellfire Robes", quality: 2, level: 20, item_type: "Cloth", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518159773/inv_chest_cloth_18.jpg")
Item.create(name: "Frost Tiger Blade", quality: 2, level: 35, item_type: "Sword", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518159754/inv_sword_05.jpg")
Item.create(name: "Marauder's Shoulder Pads", quality: 2, level: 35, item_type: "Mail", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518159722/inv_shoulder_27.jpg")
Item.create(name: "Greater Scythe", quality: 2, level: 35, item_type: "Axe", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518159688/inv_axe_03.jpg")
Item.create(name: "Abyssal Cloth Sash", quality: 2, level: 60, item_type: "Cloth", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518159662/inv_belt_06.jpg")
Item.create(name: "Netherweave Robe", quality: 2, level: 67, item_type: "Cloth", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518159638/inv_chest_cloth_29.jpg")

Item.create(name: "Grand Marshal's Dragonhide Tunic", quality: 3, level: 70, item_type: "Leather", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518238467/inv_chest_leather_03.jpg")
Item.create(name: "Staff of the Royal Wizard", quality: 3, level: 20, item_type: "Staff", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518238453/inv_staff_draenei_a_03.jpg")
Item.create(name: "Mace of the Sunwalker", quality: 3, level: 20, item_type: "Mace", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518238435/inv_mace_124.jpg")
Item.create(name: "Staff of the Earthmother", quality: 3, level: 50, item_type: "Staff", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518159810/inv_staff_goldfeathered_01.jpg")
Item.create(name: "Whirlwind Warhammer", quality: 3, level: 40, item_type: "Mace", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518238353/inv_hammer_08.jpg")
Item.create(name: "Aegis of the Scarlet Commander", quality: 3, level: 35, item_type: "Shield", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518238338/inv_shield_05.jpg")
Item.create(name: "Robe of the Magi", quality: 3, level: 38, item_type: "Cloth", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518238321/inv_chest_cloth_17.jpg")
Item.create(name: "Robe of Crystal Waters", quality: 3, level: 40, item_type: "Cloth", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518238301/inv_chest_cloth_19.jpg")
Item.create(name: "Vosh'gajin's Strand", quality: 3, level: 60, item_type: "Leather", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518238285/inv_belt_15.jpg")
Item.create(name: "Blade of Misfortune", quality: 3, level: 65, item_type: "Sword", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518238267/inv_sword_71.jpg")

Item.create(name: "Demon Stalker Greathelm", quality: 4, level: 120, item_type: "Mail", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518239304/inv_helmet_15.jpg")
Item.create(name: "Voidheart Mantle", quality: 4, level: 70, item_type: "Cloth", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518239293/inv_shoulder_52.jpg")
Item.create(name: "Warbringer Shoulderguards", quality: 4, level: 120, item_type: "Plate", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518239281/inv_shoulder_54.jpg")
Item.create(name: "Vindicator's Brand", quality: 4, level: 100, item_type: "Sword", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518239269/inv_sword_draenei_01.jpg")
Item.create(name: "Warbringer", quality: 4, level: 70, item_type: "Axe", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518239258/inv_axe_10.jpg")
Item.create(name: "Icebane Leggings", quality: 4, level: 80, item_type: "Plate", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518239245/inv_pants_04.jpg")
Item.create(name: "Molten Helm", quality: 4, level: 60, item_type: "Leather", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518239229/inv_helmet_08.jpg")
Item.create(name: "Sorcerer's Gloves", quality: 4, level: 20, item_type: "Cloth", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518239216/inv_gauntlets_17.jpg")

Item.create(name: "Warp Slicer", quality: 5, level: 70, item_type: "Sword", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518240342/inv_sword_69.jpg")
Item.create(name: "Cosmic Infuser", quality: 5, level: 100, item_type: "Mace", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518240382/inv_mace_48.jpg")
Item.create(name: "Shattered Fragments of Sindragosa", quality: 5, level: 101, item_type: "Cloth", image_url: "http://res.cloudinary.com/dcf4iyb6t/image/upload/v1518240389/inv_helmet_133.jpg")

# Inventory.update(id: 1, user_id: 1, gold: 1000)
# Inventory.update(id: 2, user_id: 2, gold: 500)
# Inventory.update(id: 3, user_id: 3, gold: 450)

# Pusheen's Inventory
InventoryItem.create(item_id: 1, inventory_id: 1)
InventoryItem.create(item_id: 2, inventory_id: 1)
InventoryItem.create(item_id: 3, inventory_id: 1)
InventoryItem.create(item_id: 4, inventory_id: 1)

# Stormy's Inventory
InventoryItem.create(item_id: 5, inventory_id: 2)
InventoryItem.create(item_id: 6, inventory_id: 2)

# Pusheen's Inv cont'd
InventoryItem.create(item_id: 12, inventory_id: 1)
InventoryItem.create(item_id: 22, inventory_id: 1)
InventoryItem.create(item_id: 36, inventory_id: 1)
InventoryItem.create(item_id: 40, inventory_id: 1)
InventoryItem.create(item_id: 21, inventory_id: 1)
InventoryItem.create(item_id: 29, inventory_id: 1)
InventoryItem.create(item_id: 33, inventory_id: 1)
InventoryItem.create(item_id: 42, inventory_id: 1)
InventoryItem.create(item_id: 46, inventory_id: 1)
InventoryItem.create(item_id: 48, inventory_id: 1)

# Stormy's Inv cont'd
InventoryItem.create(item_id: 7, inventory_id: 2)
InventoryItem.create(item_id: 8, inventory_id: 2)
InventoryItem.create(item_id: 9, inventory_id: 2)
InventoryItem.create(item_id: 13, inventory_id: 2)
InventoryItem.create(item_id: 15, inventory_id: 2)
InventoryItem.create(item_id: 17, inventory_id: 2)
InventoryItem.create(item_id: 19, inventory_id: 2)
InventoryItem.create(item_id: 21, inventory_id: 2)
InventoryItem.create(item_id: 47, inventory_id: 2)
InventoryItem.create(item_id: 45, inventory_id: 2)

# Pip's Inventory. left: 23-39
InventoryItem.create(item_id: 11, inventory_id: 3)
InventoryItem.create(item_id: 10, inventory_id: 3)
InventoryItem.create(item_id: 14, inventory_id: 3)
InventoryItem.create(item_id: 16, inventory_id: 3)
InventoryItem.create(item_id: 18, inventory_id: 3)
InventoryItem.create(item_id: 44, inventory_id: 3)
InventoryItem.create(item_id: 20, inventory_id: 3)
InventoryItem.create(item_id: 44, inventory_id: 3)
InventoryItem.create(item_id: 43, inventory_id: 3)
InventoryItem.create(item_id: 41, inventory_id: 3)

# ian's inv
InventoryItem.create(item_id: 23, inventory_id: 4)
InventoryItem.create(item_id: 24, inventory_id: 4)
InventoryItem.create(item_id: 25, inventory_id: 4)
InventoryItem.create(item_id: 26, inventory_id: 4)
InventoryItem.create(item_id: 27, inventory_id: 4)
InventoryItem.create(item_id: 28, inventory_id: 4)
InventoryItem.create(item_id: 30, inventory_id: 4)
InventoryItem.create(item_id: 31, inventory_id: 4)
InventoryItem.create(item_id: 32, inventory_id: 4)
InventoryItem.create(item_id: 34, inventory_id: 4)
InventoryItem.create(item_id: 35, inventory_id: 4)
InventoryItem.create(item_id: 37, inventory_id: 4)
InventoryItem.create(item_id: 38, inventory_id: 4)
InventoryItem.create(item_id: 39, inventory_id: 4)

# Pusheen's Auctions
Auction.create(user_id: 1, inventory_item_id: 1, starting_bid: 1, buyout: 20, duration: 1)
Auction.create(user_id: 1, inventory_item_id: 2, starting_bid: 4, buyout: 10, duration: 1)
Auction.create(user_id: 1, inventory_item_id: 3, starting_bid: 2, buyout: 30, duration: 1)

# Stormy's Auctions
Auction.create(user_id: 2, inventory_item_id: 5, starting_bid: 2, buyout: 10, duration: 1)
Auction.create(user_id: 2, inventory_item_id: 6, starting_bid: 2, buyout: 30, duration: 1)

# Pusheen's Auctions cont'd
Auction.create(user_id: 1, inventory_item_id: 4, starting_bid: 2, buyout: 30, duration: 1)
Auction.create(user_id: 1, inventory_item_id: 7, starting_bid: 3, buyout: 30, duration: 12)
Auction.create(user_id: 1, inventory_item_id: 8, starting_bid: 4, buyout: 30, duration: 24)
Auction.create(user_id: 1, inventory_item_id: 9, starting_bid: 5, buyout: 30, duration: 48)
Auction.create(user_id: 1, inventory_item_id: 10, starting_bid: 1, buyout: 35, duration: 1)
Auction.create(user_id: 1, inventory_item_id: 11, starting_bid: 2, buyout: 29, duration: 12)
Auction.create(user_id: 1, inventory_item_id: 12, starting_bid: 3, buyout: 31, duration: 12)
Auction.create(user_id: 1, inventory_item_id: 13, starting_bid: 4, buyout: 33, duration: 24)
Auction.create(user_id: 1, inventory_item_id: 14, starting_bid: 5, buyout: 30, duration: 12)
# Auction.create(user_id: 1, inventory_item_id: 15, starting_bid: 6, buyout: 40, duration: 48)
# Auction.create(user_id: 1, inventory_item_id: 16, starting_bid: 10, buyout: 50, duration: 48)

# Stormy's Auctions cont'd
Auction.create(user_id: 2, inventory_item_id: 17, starting_bid: 2, buyout: 30, duration: 1)
Auction.create(user_id: 2, inventory_item_id: 18, starting_bid: 3, buyout: 30, duration: 12)
Auction.create(user_id: 2, inventory_item_id: 19, starting_bid: 4, buyout: 30, duration: 24)
Auction.create(user_id: 2, inventory_item_id: 20, starting_bid: 5, buyout: 30, duration: 48)
Auction.create(user_id: 2, inventory_item_id: 21, starting_bid: 1, buyout: 35, duration: 1)
Auction.create(user_id: 2, inventory_item_id: 22, starting_bid: 2, buyout: 29, duration: 12)
Auction.create(user_id: 2, inventory_item_id: 23, starting_bid: 3, buyout: 31, duration: 12)
Auction.create(user_id: 2, inventory_item_id: 24, starting_bid: 4, buyout: 33, duration: 24)
Auction.create(user_id: 2, inventory_item_id: 25, starting_bid: 5, buyout: 30, duration: 12)
Auction.create(user_id: 2, inventory_item_id: 26, starting_bid: 6, buyout: 40, duration: 48)

# Pip's Auctions
Auction.create(user_id: 3, inventory_item_id: 27, starting_bid: 2, buyout: 30, duration: 1)
Auction.create(user_id: 3, inventory_item_id: 28, starting_bid: 3, buyout: 30, duration: 12)
Auction.create(user_id: 3, inventory_item_id: 29, starting_bid: 4, buyout: 30, duration: 24)
Auction.create(user_id: 3, inventory_item_id: 30, starting_bid: 5, buyout: 30, duration: 48)
Auction.create(user_id: 3, inventory_item_id: 31, starting_bid: 1, buyout: 35, duration: 1)
Auction.create(user_id: 3, inventory_item_id: 32, starting_bid: 2, buyout: 29, duration: 12)
Auction.create(user_id: 3, inventory_item_id: 33, starting_bid: 3, buyout: 31, duration: 12)
Auction.create(user_id: 3, inventory_item_id: 34, starting_bid: 4, buyout: 33, duration: 24)
Auction.create(user_id: 3, inventory_item_id: 35, starting_bid: 5, buyout: 30, duration: 12)
Auction.create(user_id: 3, inventory_item_id: 36, starting_bid: 6, buyout: 40, duration: 48)

# Ian's Auctions
Auction.create(user_id: 4, inventory_item_id: 37, starting_bid: 2, buyout: 30, duration: 1)
Auction.create(user_id: 4, inventory_item_id: 38, starting_bid: 3, buyout: 30, duration: 12)
Auction.create(user_id: 4, inventory_item_id: 39, starting_bid: 4, buyout: 30, duration: 24)
Auction.create(user_id: 4, inventory_item_id: 40, starting_bid: 5, buyout: 30, duration: 48)
Auction.create(user_id: 4, inventory_item_id: 41, starting_bid: 1, buyout: 35, duration: 1)
Auction.create(user_id: 4, inventory_item_id: 42, starting_bid: 3, buyout: 31, duration: 12)
Auction.create(user_id: 4, inventory_item_id: 43, starting_bid: 4, buyout: 33, duration: 24)
Auction.create(user_id: 4, inventory_item_id: 44, starting_bid: 5, buyout: 30, duration: 12)
Auction.create(user_id: 4, inventory_item_id: 45, starting_bid: 6, buyout: 40, duration: 48)
Auction.create(user_id: 4, inventory_item_id: 46, starting_bid: 10, buyout: 50, duration: 48)
Auction.create(user_id: 4, inventory_item_id: 47, starting_bid: 10, buyout: 50, duration: 48)
Auction.create(user_id: 4, inventory_item_id: 48, starting_bid: 10, buyout: 50, duration: 48)
Auction.create(user_id: 4, inventory_item_id: 49, starting_bid: 2, buyout: 29, duration: 12)
Auction.create(user_id: 4, inventory_item_id: 50, starting_bid: 2, buyout: 29, duration: 12)

# Bids on Pusheen's Items
Bid.create(user_id: 2, auction_id: 1, amount: 2)
Bid.create(user_id: 3, auction_id: 1, amount: 3)

# Pusheen's Bids
Bid.create(user_id: pusheen.id, auction_id: 4, amount: 1)
Bid.create(user_id: pusheen.id, auction_id: 5, amount: 2)
Bid.create(user_id: pusheen.id, auction_id: 5, amount: 3)