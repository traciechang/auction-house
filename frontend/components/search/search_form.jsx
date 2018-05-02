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
            item_name: "",
            minimum_item_level: "",
            maximum_item_level: "",
            item_type: "",
            item_quality: ""
        }
    }

    componentDidUpdate() {
        this.props.fetchAuctions(this.state);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            this.setState({
                "item_type": nextProps.selectedFilter
            })
        }
    };

    clearFilters = (e) => {
        e.preventDefault();
        this.props.fetchAuctions().then(this.setState({
            item_name: "",
            minimum_item_level: "",
            maximum_item_level: "",
            item_quality: "",
            item_type: ""
        }));
        this.props.handleFilterClick("");
    };

    displayQuality = () => {
        const qualities = Object.keys(QUALITY).map(key => (
            <option value={key} key={key}>{QUALITY[key]}</option>
        ))

        return (
            <select onChange={this.update("item_quality")} value={this.state.item_quality}>
                <option value="" selected disabled hidden>--Select--</option>
                {qualities}
            </select>
        )
    };

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.fetchAuctions(this.state);
    // }

    render() {
        return (
            <div className="search-form text-light">
                <form class="form-row align-items-center d-flex justify-content-start" onSubmit={this.handleSubmit}>
                    <div class="col-xs-12 col-md-4 col-lg-3 name-div">
                        <label>Name</label>
                        <input onChange={this.update("item_name")} value={this.state.item_name || ""}/>
                    </div>
                    
                    <div class="col-lg-3 col-xs-12 col-md-4 level-div">
                        <label>Level Range</label>
                        <input onChange={this.update("minimum_item_level")} value={this.state.minimum_item_level} type="number" min={1} max={120}/>&nbsp; - &nbsp;
                        <input onChange={this.update("maximum_item_level")} value={this.state.maximum_item_level} type="number" min={1} max={120}/>
                    </div>
                    

                    <div class="col-lg-3 col-xs-12 col-md-3 quality-div">
                        <label>Quality</label>
                        {this.displayQuality()}
                    </div>
                    
                    <div class="col-lg-2 col-xs-12 col-md-1 search-reset-buttons">
                        {/* <button class="mb-md-2 search-button">Search</button> */}
                        
                        <button class="reset-button" onClick={this.clearFilters}>Reset</button>
                    </div>
                </form>
            </div>
        )
    }

    update(key) {
        return e => this.setState({[key]: e.target.value})
    };
}

export default SearchForm;