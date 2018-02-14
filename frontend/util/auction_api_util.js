export const fetchAuctions = data => (
    $.ajax({
        method: "GET",
        url: "api/auctions",
        data
    })
);

export const createAuction = auction => {
    console.log("in auction api util")
    console.log(auction)
    console.log(typeof auction.duration)
    return(
    $.ajax({
        method: "POST",
        url: "api/auctions",
        data: {auction}
    })
)};