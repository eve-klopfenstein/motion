import React from 'react';
import { RightSide, HomeContainer } from "../../../style/layout.js";
import { LeftSideHome } from "../left-side";
import CongratulationsBody from "./Congratulations-body";

const Congratulations = () => {

    return (
        <HomeContainer>
            <LeftSideHome />
            <RightSide>
                <CongratulationsBody />
            </RightSide>
        </HomeContainer>
    )
}

export default Congratulations;