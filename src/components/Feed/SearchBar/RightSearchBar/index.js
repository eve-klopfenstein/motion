import { RightSearchDiv } from '../../../../style-feed/Nav/layout.js';
import { UpperRightButtons, ClickedUpperRightButtons } from '../../../../style-feed/Buttons/buttons.js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import styled from 'styled-components';

const NewLink = styled(UpperRightButtons)`
    margin-top: 18px;
`

const RightSearchBar = () => {
    const [clickedIndex, setClickedIndex] = useState(0);
    let id = useSelector(state => state.id);

    return (
        <RightSearchDiv>
            <UpperRightButtons primary={ clickedIndex === 0 ? true : false } onClick={ () => setClickedIndex(0) } >Liked</UpperRightButtons>
            <Link to={ `/feed/${id}/find-friends/` } >
              <NewLink primary={ clickedIndex === 1 ? true : false } onClick={ () => setClickedIndex(1) } >Friends</NewLink>
            </Link>
            <UpperRightButtons primary={ clickedIndex === 2 ? true : false } onClick={ () => setClickedIndex(2) } >Follow</UpperRightButtons>
        </RightSearchDiv>
    )
}

export default RightSearchBar;