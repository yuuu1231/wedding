import React from 'react';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

const ContentContainer = styled.div`
    color: #616161;
    font-family: "Kotra";
    text-align: center;
    align-items: center;
    padding-top: 40%;
    padding-bottom: 30%;
`;

const TextDiv = styled.div`
    padding: 2%;
    font-weight: 200;
`;
const TextDivBold = styled.div`
    padding-bottom: 15%;
    font-weight: 400;
`;
const StyledImg = styled.img`
    width: 80%;
`;

export default function ContentsContainer() {
    return (
        <div>
            <ContentContainer>
                <Fade bottom cascade>
                    <TextDivBold>초대합니다.</TextDivBold>
                    <TextDiv>9월의 좋은 날</TextDiv>
                    <TextDiv>결혼합니다.</TextDiv>
                    <TextDiv>함께하여</TextDiv>
                    <TextDiv>축복해주시면 감사하겠습니다.</TextDiv>
                </Fade>
            </ContentContainer>
        </div>);
}