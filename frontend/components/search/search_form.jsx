import React from "react";

const QUALITY = {
    0: "Poor",
    1: "Common",
    2: "Uncommon",
    3: "Rare",
    4: "Epic",
    5: "Legendary"
};

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item_level_min: "",
            item_level_max: "",
            item_quality: ""
        }

        this.displayQuality = this.displayQuality.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    displayQuality() {
        return Object.keys(QUALITY).map(key => (
            <option value={key} key={key}>{QUALITY[key]}</option>
        ))
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchAuctions(this.state);
    }

    render() {
        return (
            <div className="search-form">
                <form onSubmit={this.handleSubmit}>
                    <label>Name
                        <input />
                    </label>
                    <label>Level Range
                        <input onChange={this.update("item_level_min")} value={this.state.item_level_min} type="number" min={1} max={120}/> - <input onChange={this.update("item_level_max")} value={this.state.item_level_max} type="number" min={1} max={120}/>
                    </label>
                    <label>Quality
                        {/* add value */}
                        <select onChange={this.update("item_quality")}>{this.displayQuality()}</select>
                    </label>
                    <button>Search</button>
                </form>
            </div>
        )
    }

    update(key) {
        return e => this.setState({[key]: e.target.value})
    };
}

export default SearchForm;