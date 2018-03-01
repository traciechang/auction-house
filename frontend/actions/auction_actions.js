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

// really needed?
export const createAuction = auction => dispatch => (
    AuctionAPIUtil.createAuction(auction).then(response => (
        dispatch(receiveAuction(response))
    ))
);

export const fetchAuction = auction_id => dispatch => (
    AuctionAPIUtil.fetchAuction(auction_id).then(response => (
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

export const fetchMyBidAuctions = auctions => dispatch => (
    AuctionAPIUtil.fetchMyBidAuctions(auctions).then(response => (
        dispatch(receiveAuctions(response))
    ))
);

export const updateAuction = auction => dispatch => (
    AuctionAPIUtil.updateAuction(auction).then(response => (
        dispatch(receiveAuction(response))
    ))
);