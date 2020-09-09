import { defaultCipherList } from "constants";

import React from 'react';
import './search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchProps {
    onClick(search: string): void;
}


interface SearchState {
    search: string
}

export default class SearchBar extends React.Component<SearchProps, SearchState>{
    constructor(props: any) {
        super(props);
        this.state = {
            search: "",
        }
    }


    render() {

        return (
            <div className="container">
                <div>
                    <input type="text" placeholder="Search.." name="search" onChange={(e) => this.setState({ search: e.target.value })} />
                    <FontAwesomeIcon icon={faSearch} size="lg" onClick={() => this.props.onClick(this.state.search)} />
                </div>
            </div>

        );
    }
}

