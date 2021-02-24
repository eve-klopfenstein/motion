import { RightSearchDiv } from '../../../../style-feed/Nav/layout.js';
import { UpperRightButtons, ClickedUpperRightButtons } from '../../../../style-feed/Buttons/buttons.js';
import React, { useState } from 'react';

const RightSearchBar = () => {
    return (
        <RightSearchDiv>
            <ClickedUpperRightButtons>Liked</ClickedUpperRightButtons>
            <UpperRightButtons>Friends</UpperRightButtons>
            <UpperRightButtons>Follow</UpperRightButtons>
        </RightSearchDiv>
    )
}

export default RightSearchBar;