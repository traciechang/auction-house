import React from "react";

const FILTERS = ["Axe", "Cloth", "Food", "Junk", "Leather", "Mace", "Mail", "Plate", "Reagent", "Shield", "Sword"]

class FilterForm extends React.Component {
    constructor(props) {
        super(props);
    }

    displayGold() {
        if (this.props.currentUser) {
            return <span className="filter-form-gold">Gold {this.props.currentUser.inventory.gold}</span>
        }
    };

    filterList(e) {
        return FILTERS.map(filter => (
            <li key={filter} onClick={this.props.handleFilterClick.bind(this, filter)}>{filter}</li>
        ))
    };

    render() {
        // return (
        //     <div className="filter-form">
        //         <span className="filter-form-header">Filters</span>
        //         <ul className="filter-form-list">{this.filterList()}</ul>
        //         {this.displayGold()}
        //     </div>
        // )

        // 

        return (
            <div class="col-md-4">
                <span className="filter-form-header">Filters</span>
                <ul className="filter-form-list">{this.filterList()}</ul>
                {this.displayGold()}
            </div>
        )
    }
}

export default FilterForm;