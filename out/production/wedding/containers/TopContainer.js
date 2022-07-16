import React from 'react';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import wedding_day from "../images/pictures/wedding_day.png";
import picture from "../images/pictures/main_picture_2.png";

const TitleImg = styled.img`
    padding-top: 5%;
    width: 86%;
    padding-bottom:0;
    display:block;
    padding-left: 7%;
    padding-right: 7%;
    opacity:0.8; 
`;
const MainImg = styled.img`
    width: 100%;
    margin-bottom:0;
    display:block;
    vertical-align:top;
`;

const Contents = styled.div`
    font-weight: 100;
    padding-bottom: 30%;
    padding-top: 2%;
    margin-top: 0;
    background-color: #F8E6E0;
`;
const Name = styled.div`
    font-family: 'NanumSquareAcb';
    padding-bottom: 2%;
`;
export default function TopContainer() {
    return (
        <div>
            <Fade top>
                <TitleImg src={wedding_day}/>
            </Fade>
            <MainImg src={picture}/>
            <Contents>
                <Fade bottom>
                    <Name>김세중 · 최유정</Name>
                    <div>2022년 9월 18일 일요일 오후 3시</div>
                    <div style={{paddingTop: "1%"}}>소노펠리체 컨벤션</div>
                </Fade>
            </Contents>

        </div>
    );
}