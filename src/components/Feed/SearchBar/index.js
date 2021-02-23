import React from 'react';
import { NavBarContainer } from '../../../style-feed/layout.js';
import LeftSearchBar from './LeftSearchBar';
import RightSearchBar from './RightSearchBar';

const SearchBar = () => {
    return (
        <NavBarContainer>
            <LeftSearchBar />
            <RightSearchBar />
        </NavBarContainer>
    )
}

export default SearchBar;