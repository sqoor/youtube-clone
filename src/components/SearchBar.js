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
            <header className="mb-5">


                <ul className="nav justify-content-center fixed-top pt-2 pb-4">
                    <li className="nav-item">
                    </li>
                    <li className="nav-item">
                    </li>
                    <li className="nav-item w-75">
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
                    </li>
                    <li className="nav-item">
                    </li>
                </ul>
            </header>
        )
    }
}

export default SearchBar
