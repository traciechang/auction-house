import * as AuctionAPIUtil from "../util/auction_api_util";

export const RECEIVE_AUCTIONS = "RECEIVE_AUCTIONS";
export const RECEIVE_AUCTION = "RECEIVE_AUCTION";

// made this to go w/ createAuction - necessary or no?
export const receiveAuction = auction => ({
    type: 'RECEIVE_AUCTION',
    auction
})

export const receiveAuctions = auctions => ({
    type: "RECEIVE_AUCTIONS",
    auctions
});

// made a receiveAuction action to update state with new auction created - merges w/ old state of existing auctions.
export const createAuction = auction => dispatch => (
    AuctionAPIUtil.createAuction(auction).then(response => (
        dispatch(receiveAuction(response))
    ))
);

export const fetchAuctions = auctions => dispatch => (
    AuctionAPIUtil.fetchAuctions(auctions).then(response => (
        dispatch(receiveAuctions(response))
    ))
);