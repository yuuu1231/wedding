import React from 'react';
import MapComponent from "../components/MapComponent";
import styled from "styled-components";

const StyledContainer = styled.div`
    color: #616161;
    font-family: "MaruBuri";
    font-weight: 400;
    text-align: center;
    padding-bottom: 5%;
`;

export default function MapContainer() {
    return (
        <div>
            <StyledContainer>
                찾아오시는 길
            </StyledContainer>
            <MapComponent/>
        </div>
    );
}