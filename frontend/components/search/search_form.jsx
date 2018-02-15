import React from "react";

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="search-form">
                <form>
                    <label>Name
                        <input />
                    </label>
                    <label>Level Range
                        <input /> - <input />
                    </label>
                    <label>Rarity
                        <select></select>
                    </label>
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchForm;