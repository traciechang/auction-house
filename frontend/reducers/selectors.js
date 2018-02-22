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

export const selectSellingAuctions = state => {
    const allActiveAuctions = selectActiveAuctions(state);
    let selling = 0;

    Object.keys(allActiveAuctions).forEach(key => {
        if (allActiveAuctions[key].user_id === state.session.currentUser.id) {
            selling += 1
        }
    })

    return selling;
}

export const selectWonAuctions = state => {
    const endAuctions = selectEndedAuctions(state);
    let wonAuctions = 0;

    Object.keys(endAuctions).forEach(key => {
        if (endAuctions[key].bid && endAuctions[key].bid.user_id === state.session.currentUser.id) {
            wonAuctions += 1;
        }
    })

    return wonAuctions;
}