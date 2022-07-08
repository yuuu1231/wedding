import React from 'react';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import picture1 from '../images/picture_1.png';

const ContentContainer = styled.div`
    color: #616161;
    font-family: "MaruBuri";
    text-align: center;
    align-items: center;
    padding-top: 10%;
`;

const TextDiv = styled.div`
    padding: 2%;
    font-weight: 200;
`;
const TextDivBold = styled.div`
    padding: 5%;
    font-weight: 400;
`;
const StyledImg = styled.img`
    width: 80%;
`;

export default function BodyContainer() {
    return (
        <div>
            <ContentContainer>
                <Fade bottom>
                    <TextDivBold>초대합니다.</TextDivBold>
                </Fade>
                <Fade bottom>
                    <TextDiv>9월의 좋은 날</TextDiv>
                </Fade>
                <Fade bottom>
                    <TextDiv>결혼합니다.</TextDiv>
                </Fade>
                <Fade bottom>
                    <TextDiv>함께하여</TextDiv>
                </Fade>
                <Fade bottom>
                    <TextDiv>축복해주시면 감사하겠습니다.</TextDiv>
                </Fade>
                <TextDiv>.</TextDiv>
            </ContentContainer>
        </div>);
}