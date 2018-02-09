import React from "react";

class Browse extends React.Component {
    constructor(props) {
        super(props);

        this.allAuctions = this.allAuctions.bind(this);
    }

    componentWillMount() {
        this.props.fetchAuctions();
    }

    allAuctions() {
        return Object.keys(this.props.auctions).map(key => (
            <li key={key}>{this.props.auctions[key].item_id}</li>
        ))
    }

    render() {
        return (
            <div>Browse goes here!
                <ul>{this.allAuctions()}</ul>
            </div>
        )
    }
}

export default Browse;