import React from "react";

const FILTERS = ["Axe", "Cloth", "Food", "Junk", "Leather", "Mace", "Mail", "Plate", "Reagent", "Shield", "Sword"]

class FilterForm extends React.Component {
    constructor(props) {
        super(props);
    }

    displayGold() {
        if (this.props.currentUser) {
            return <span>Gold {this.props.currentUser.inventory.gold}</span>
        }
    };

    filterList() {
        return FILTERS.map(filter => (
            <li key={filter}>{filter}</li>
        ))
    };

    render() {
        return (
            <div className="filter-form">
                <span className="filter-form-header">Filters</span>
                <ul className="filter-form-list">{this.filterList()}</ul>
                {this.displayGold()}
            </div>
        )
    }
}

export default FilterForm;