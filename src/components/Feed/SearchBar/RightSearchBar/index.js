import { RightSearchDiv } from '../../../../style-feed/Nav/layout.js';
import { UpperRightButtons, ClickedUpperRightButtons } from '../../../../style-feed/Buttons/buttons.js';
import React, { useState } from 'react';
import { useSelector } from "react-redux";

const RightSearchBar = () => {
    const [clickedIndex, setClickedIndex] = useState(0);
    let id = useSelector(state => state.id);

    return (
        <RightSearchDiv>
            <UpperRightButtons primary={ clickedIndex === 0 ? true : false } onClick={ () => setClickedIndex(0) } >Liked</UpperRightButtons>
               <UpperRightButtons primary={ clickedIndex === 1 ? true : false } onClick={ () => setClickedIndex(1) } >Friends</UpperRightButtons>
            <UpperRightButtons primary={ clickedIndex === 2 ? true : false } onClick={ () => setClickedIndex(2) } >Follow</UpperRightButtons>
        </RightSearchDiv>
    )
}

export default RightSearchBar;