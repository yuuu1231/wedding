import React from 'react';
import styled from "styled-components";
import "../font/font.css";
import ContentsContainer from "./ContentsContainer";
import texture from "../images/texture/groovepaper.png";
import TopContainer from "./TopContainer";
import GalleryContainer from "./GalleryContainer";
import MapContainer from "./MapContainer";
import AccountContainer from "./AccountContainer";
import CalendarContainer from "./CalendarContainer";

const Main = styled.div`
    width: 100vw;
    background-color: #FFFDF9;
    background-image: url(${texture});
`;

export default function MainContainer() {
    return (
        <Main>
            <TopContainer/>
            <ContentsContainer/>
            <GalleryContainer/>
            <CalendarContainer/>
            <MapContainer/>
            <AccountContainer/>
        </Main>
    );
}