import * as AuctionAPIUtil from "../util/auction_api_util";

export const RECEIVE_AUCTIONS = "RECEIVE_AUCTIONS";
export const RECEIVE_AUCTION = "RECEIVE_AUCTION";

export const receiveAuction = auction => ({
    type: 'RECEIVE_AUCTION',
    auction
})

export const receiveAuctions = auctions => ({
    type: "RECEIVE_AUCTIONS",
    auctions
});

// made a receiveAuction action to update state with new auction created - merges w/ old state of existing auctions.
// But why would we even need this, if after we create an aution, we direct the user to say, my auctions, and it will request ALL their auctions again, which will update anyway?

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

export const fetchMyAuctions = auctions => dispatch => (
    AuctionAPIUtil.fetchMyAuctions(auctions).then(response => (
        dispatch(receiveAuctions(response))
    ))
);

export const updateAuction = auction => dispatch => (
    AuctionAPIUtil.updateAuction(auction).then(response => (
        dispatch(receiveAuction(response))
    ))
);