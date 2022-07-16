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
import ConfettiComponent from "../components/ConfettiComponent";
import FooterContainer from "./FooterContainer";

const Main = styled.div`
    width: 100vw;
    background-color: #FFFFF7;
    background-image: url(${texture});
    padding-bottom: 3%;
`;
const BodyContainer = styled.div`
    padding-bottom: 20%;
`;

export default function MainContainer() {
    return (
        <Main>
            <BodyContainer>
                <ConfettiComponent/>
                <TopContainer/>
                <ContentsContainer/>
                <GalleryContainer/>
                <CalendarContainer/>
                <MapContainer/>
                <AccountContainer/>
            </BodyContainer>
            <FooterContainer/>
        </Main>
    );
}