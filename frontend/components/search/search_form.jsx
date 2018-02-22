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
            item_quality: "",
            item_type: ""
        }

        this.displayQuality = this.displayQuality.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearFilters = this.clearFilters.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            this.setState({
                "item_type": nextProps.selectedFilter
            })
        }
    };

    clearFilters(e) {
        e.preventDefault();
        this.props.fetchAuctions().then(this.setState({
            item_name: "",
            item_level_min: "",
            item_level_max: "",
            item_quality: "",
            item_type: ""
        }));
    };

    displayQuality() {
        const qualities = Object.keys(QUALITY).map(key => (
            <option value={key} key={key}>{QUALITY[key]}</option>
        ))

        return (
            <select onChange={this.update("item_quality")}>
                <option selected disabled hidden>--Select--</option>
                {qualities}
            </select>
        )
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchAuctions(this.state);
    }

    render() {
        return (
            <div className="search-form">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input onChange={this.update("item_name")} value={this.state.item_name || ""}/>
                    </div>
                    
                    <div>
                        <label>Level Range</label>
                        <input onChange={this.update("item_level_min")} value={this.state.item_level_min} type="number" min={1} max={120}/> - 
                        <input onChange={this.update("item_level_max")} value={this.state.item_level_max} type="number" min={1} max={120}/>
                    </div>
                    

                    <div>
                        <label>Quality</label>
                        {this.displayQuality()}
                    </div>
                    
                    <button>Search</button>
                </form>
                <button className="reset-button" onClick={this.clearFilters}>Reset</button>
            </div>
        )
    }

    update(key) {
        return e => this.setState({[key]: e.target.value})
    };
}

export default SearchForm;