import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


export class SearchBar extends Component {
    submit = (e) => {
        e.preventDefault();

        console.log('search input:', this.searchInput.value);
        this.props.searchVideos(this.searchInput.value);
        this.searchInput.value = '';
    }

    render() {
        return (
            <header className="mb-3" style={headerStyle}>
                <ul className="nav pt-2 pb-2">
                    <li className="nav-item mx-4">
                        <FontAwesomeIcon icon={faBars} size="2x" />
                    </li>
                    <li className="nav-item" style={{ color: 'red' }}>
                        <sup style={{ marginTop: '-10px' }} className="text-muted">JO</sup>
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                        <span className="mb-5 text-dark font-weight-bolder">YouTube</span>
                    </li>
                    <li className="nav-item mx-auto ml-1">
                        <form className="form-inline" onSubmit={this.submit}>
                            <div class="input-group" style={{height: '10px', width: '550px'}}>
                            <div class="input-group-append">
                                    <button className="px-4 py-0 btn btn-secondary" style={{background: 'greylight'}}>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </button>
                                </div>
                                <input
                                    className="form-control"
                                    ref={elem => this.searchInput = elem}
                                    name="search"
                                    type="search"
                                    placeholder="Search"
                                />
                            </div>
                        </form>
                    </li>
                    <li className="nav-item">
                    </li>
                    <li className="nav-item">
                    </li>
                    <li className="nav-item">
                    </li>
                </ul>
            </header>
        )
    }
}

export default SearchBar


const headerStyle = {
    boxShadow: '0px 2px 5px 0px rgba(133,121,133,.2)',
    // borderBottom: 'solid 2px red',
    position: 'sticky',
    top: '0',
    zIndex: '1',
    background: 'white'
}