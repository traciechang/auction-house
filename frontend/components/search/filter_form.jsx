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
        let arr = [];

        FILTERS.forEach(filter => {
            if (this.props.selectedFilter === filter) {
                arr.push(<li key={filter} onClick={this.props.handleFilterClick.bind(this, filter)} selected-filter="true">{filter}</li>);
            } else {
                arr.push(<li key={filter} onClick={this.props.handleFilterClick.bind(this, filter)} selected-filter="false">{filter}</li>);
            }
        })

        return arr;
    };

    render() {
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