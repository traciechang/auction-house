export const createBid = bid => (
    $.ajax({
        method: "POST",
        url: "api/bids",
        data: {bid}
    })
);