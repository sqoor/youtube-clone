import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import {
    faBars,
    faSearch,
    faVideo,
    faEllipsisV,
    faTh,
    faShareSquare,
    faUserCircle
} from '@fortawesome/free-solid-svg-icons';


export class SearchBar extends Component {
    goHome = () => {
        window.location.href = '/';
    }

    goResult = (e) => {
        e.preventDefault();

        const searchQuery = this.searchInput.value;
        
        if(searchQuery=== "") return;

        window.location.href = `/results?search_query=${searchQuery}`;
    }

    render() {
        return (
            <header className="mb-3" style={headerStyle}>
                <ul className="nav pt-2 pb-2">
                    <li className="nav-item mx-4">
                        <FontAwesomeIcon icon={faBars} size="2x" />
                    </li>
                    <li onClick={this.goHome} className="nav-item" style={iconStyle}>
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                        <span className="mb-5 text-dark font-weight-bolder">
                            <span>YouTube</span>
                            <sup className="text-muted">JO</sup>
                        </span>
                    </li>
                    <li className="nav-item mx-auto ml-1">
                        <form className="form-inline" onSubmit={this.goResult}>
                            <div className="input-group" style={{ height: '10px', width: '550px' }}>
                                <input
                                    className="form-control"
                                    ref={elem => this.searchInput = elem}
                                    name="search"
                                    type="search"
                                    placeholder="Search"
                                />
                                <div className="input-group-append">
                                    <button className="px-4 py-0 btn btn-light text-secondary border" style={{ background: 'greylight' }}>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </li>
                    <li className="nav-item mx-3 pt-2 text-secondary">
                        <FontAwesomeIcon icon={faVideo} />
                    </li>
                    <li className="nav-item mx-2 pt-2 text-secondary">
                        <FontAwesomeIcon icon={faTh} />
                    </li>
                    <li className="nav-item mx-3 pt-2 text-secondary">
                        <FontAwesomeIcon icon={faShareSquare} />
                    </li>
                    <li className="nav-item mx-2 ml-3 pt-2 text-secondary">
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </li>
                    <li className="nav-item mx-3 text-secondary">
                        <div className="btn btn-outline-primary">
                            <FontAwesomeIcon icon={faUserCircle} />
                            {' '} SIGN IN
                        </div>
                    </li>
                </ul>
            </header>
        )
    }
}

export default SearchBar

const headerStyle = {
    boxShadow: '0px 2px 5px 0px rgba(133,121,133,.2)',
    position: 'sticky',
    top: '0',
    zIndex: '1',
    background: 'white'
}

const iconStyle = {
    color: 'red',
    cursor: 'pointer'
}