export const fetchAuctions = data => (
    $.ajax({
        method: "GET",
        url: "api/auctions",
        data
    })
);

export const createAuction = data => (
    $.ajax({
        method: "POST",
        url: "api/auctions",
        data
    })
);