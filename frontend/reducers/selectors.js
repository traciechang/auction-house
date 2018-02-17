export const selectActiveAuctions = state => {
    const allAuctions = state.entities.auctions;
    let activeAuctions = {};

    Object.keys(allAuctions).forEach(key => {
        if (new Date(allAuctions[key].end_time) > new Date()) {
            activeAuctions[key] = allAuctions[key]
        }
    });
    return activeAuctions;
};

export const selectEndedAuctions = state => {
    const allAuctions = state.entities.auctions;
    let endedAuctions = {};

    Object.keys(allAuctions).forEach(key => {
        if (new Date(allAuctions[key].end_time) <= new Date()) {
            endedAuctions[key] = allAuctions[key]
        }
    });
    return endedAuctions;
}