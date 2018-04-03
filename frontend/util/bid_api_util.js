export const createBid = bid => (
    $.ajax({
        method: "POST",
        url: "api/bids",
        data: {bid}
    })
);

export const fetchBid = auction_id => (
    $.ajax({
        method: "GET",
        url: "api/bids/1",
        data: {auction_id}
    })
);