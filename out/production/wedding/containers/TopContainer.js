import React from 'react';
import styled from "styled-components";
import "../css/App.css";
import picture from "../images/main_picture.png";

const StyledImg = styled.img`
    width: 100%;
    padding-bottom:0;
    display:block;
`;
const StyledContainer = styled.div`
    background-color: #f4d1c5;
    margin-top: 0;
`;
const Contents = styled.div`
    font-weight: 100;
    padding-bottom: 30%;
    padding-top: 2%;
`;

export default function TopContainer() {
    return (
        <div>
            <StyledImg src={picture}/>
            <StyledContainer>
                <Contents>
                    <div>2022년 9월 18일 일요일 오후 3시</div>
                    <div>소노펠리체 컨벤션 다이아몬드홀 (단독홀)</div>
                </Contents>
            </StyledContainer>
        </div>
    );
}