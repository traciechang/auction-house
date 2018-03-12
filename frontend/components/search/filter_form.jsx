import React from "react";

const FILTERS = ["Axe", "Cloth", "Food", "Junk", "Leather", "Mace", "Mail", "Plate", "Reagent", "Shield", "Sword"]

class FilterForm extends React.Component {
    constructor(props) {
        super(props);
    }

    displayGold() {
        if (this.props.currentUser) {
            return (
                <div class="filter-form-gold-div row">
                    <span className="filter-form-gold col-xs-3 mx-auto">Gold {this.props.currentUser.inventory.gold}</span>
                </div>
            )
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
            <div class="col-md-3 filter-form">
                <div class="filter-form-header-div row">
                <span className="col-xs-3 mx-auto text-light filter-form-header">Filters</span>
                </div>

                <ul className="filter-form-list">{this.filterList()}</ul>
                
                {this.displayGold()}
            </div>
        )
    }
}

export default FilterForm;