export const createBid = bid => {
    console.log("in bid api util, createBid")
return (
    $.ajax({
        method: "POST",
        url: "api/bids",
        data: {bid}
    })
)};

export const fetchBid = auction_id => {
    console.log("in bid api util, fetchBid")
    console.log({auction_id})
return(
    $.ajax({
        method: "GET",
        url: "api/bids/1",
        data: {auction_id}
    })
)}