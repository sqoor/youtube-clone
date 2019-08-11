import React, { Component } from 'react'

export class SearchBar extends Component {
    submit = (e) => {
        e.preventDefault();

        console.log('search input:', this.searchInput.value);
        this.props.searchVideos(this.searchInput.value);
        this.searchInput.value = '';
    }

    render() {
        return (
            <header>
                <form onSubmit={this.submit}>
                    <input 
                        ref={elem => this.searchInput = elem}
                        name="search"
                        className="w-25"
                        type="search"
                        placeholder="Search"
                    />
                    <button>Search</button>
                </form>
            </header>
        )
    }
}

export default SearchBar
