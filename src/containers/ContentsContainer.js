import React from 'react';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import picture from "../images/pictures/flower.png";

const ContentContainer = styled.div`
    padding-top: 20%;
    padding-bottom: 30%;
`;

const TitleDiv = styled.div`
    padding-bottom: 10%;
    font-family: 'NanumSquareacB';
    font-size: 100%;
`;

const TextDiv = styled.div`
    padding: 2%;
`;
const StyledImg = styled.img`
    width: 70%;
    margin-left:8%
`;
export default function ContentsContainer() {
    return (
        <div>
            <StyledImg src={picture} />
            <ContentContainer>
                <Fade bottom cascade>
                    <TitleDiv>초대합니다.</TitleDiv>
                    <TextDiv>9월의 좋은 날</TextDiv>
                    <TextDiv>결혼합니다.</TextDiv>
                    <TextDiv>함께하여</TextDiv>
                    <TextDiv>축복해주시면 감사하겠습니다.</TextDiv>
                </Fade>
            </ContentContainer>
        </div>);
}