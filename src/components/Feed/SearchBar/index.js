import React from 'react';
import { SearchBarContainer } from '../../../style-feed/Nav/layout.js';
import LeftSearchBar from './LeftSearchBar';
import RightSearchBar from './RightSearchBar';

const SearchBar = () => {
    return (
        <SearchBarContainer>
            <LeftSearchBar />
            <RightSearchBar />
        </SearchBarContainer>
    )
}

export default SearchBar;