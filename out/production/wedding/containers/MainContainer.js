import React from 'react';
import styled from "styled-components";
import "../font/font.css";
import BodyContainer from "./BodyContainer";
import texture from "../images/background/natural-paper.png";
import TopContainer from "./TopContainer2";
import GalleryContainer from "./GalleryContainer";
import MapContainer from "./MapContainer";
import AccountContainer from "./AccountContainer";

const Main = styled.div`
    width: 100vw;
    background-color: #FFFCF6;
    background-image: url(${texture});
`;

export default function MainContainer() {
    return (
        <Main>

            <TopContainer/>
            <BodyContainer/>
            <MapContainer/>
            <AccountContainer/>
{/*            <GalleryContainer/>*/}
        </Main>
    );
}