export const fetchAuctions = data => (
    $.ajax({
        method: "GET",
        url: "api/auctions",
        data
    })
);

export const fetchMyAuctions = data => (
    $.ajax({
        method: "GET",
        url: "api/auctions?auc=myauctions",
        data
    })
);

export const fetchMyBidAuctions = data => (
    $.ajax({
        method: "GET",
        url: "api/auctions?auc=mybids",
        data
    })
);

export const createAuction = auction => (
    $.ajax({
        method: "POST",
        url: "api/auctions",
        data: {auction}
    })
);

export const updateAuction = auction => (
    $.ajax({
        method: "PATCH",
        url: `api/auctions/${auction.id}`,
        data: {auction}
    })
);