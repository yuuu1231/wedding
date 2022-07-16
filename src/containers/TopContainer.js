import React from 'react';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import wedding_day from "../images/pictures/wedding_day.png";
import photo from "../images/pictures/main_picture_3.png";
import AudioComponent from "../components/AudioComponent";


const TitleImg = styled.img`
    padding-top: 6%;
    width: 86%;
    padding-bottom:0;
    display:block;
    padding-left: 7%;
    padding-right: 7%;
/*    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, .1));*/
`;

const MainContainer = styled.div`
    background-image: url(${photo});
    background-size: 100%;
    background-repeat: no-repeat;
`
const Background = styled.div`
    background-color: rgba( 255, 254, 249, 0);
    padding: 3% 1% 3% 1%;
`

const Contents = styled.div`
    padding-top: 75%;
    padding-bottom:10%;
    margin-top: 0;
    color: #938985;
`;
const Name = styled.div`
    font-family: 'NanumSquareAcb';
    padding-bottom: 2%;
`;
export default function TopContainer() {
    return (
        <div>
            <MainContainer>
                <AudioComponent/>
                <Fade top>
                    <TitleImg src={wedding_day}/>
                </Fade>
                <Contents>
                    <Background>
                        <Fade bottom>
                            <Name>────&nbsp;&nbsp;김세중 · 최유정&nbsp;&nbsp;────</Name>
                            <div>2022년 9월 18일 일요일 오후 3시</div>
                            <div style={{paddingTop: "1%"}}>소노펠리체 컨벤션</div>
                        </Fade>
                    </Background>

                </Contents>
            </MainContainer>
        </div>
    );
}