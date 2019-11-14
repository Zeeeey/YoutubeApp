import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            term: ''
        }
    }

    render() {
        return (
            <div className="search-bar form-group"> 
                {/* <label>Search: </label> */}
                <input
                    className="form-control text-center"
                    name='term'
                    value={this.state.term}
                    // onChange={e => this.setState({ term: e.target.value })}
                    onChange={e => this.onInputChange(e.target.value)}
                />
            </div>
        );
    }

    onInputChange(term){
        this.setState({ term })
        this.props.onSearchTermChange(term)
    }
}

export default SearchBar;