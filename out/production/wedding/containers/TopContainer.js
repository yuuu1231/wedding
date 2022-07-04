import styled from "styled-components";
import mainImg from "../images/main.jpg";
import "../App.css";

const StyledContainer = styled.div`
    background-size: 100%;
    background-image: url(${mainImg});
    background-repeat: no-repeat;
`;

const NameDiv = styled.div`
    color: #595454;
    padding: 5%;
    font-family: "MaruBuri";
    font-weight: 100;
    display: flex;
`;
const Contents = styled.div`
    font-size: 100%;
    text-align: center;
    color: #e8e8e8;
    font-family: "MaruBuri";
    font-weight: 100;
    padding-top: 120%;
    padding-bottom: 30%;
`;
const TextDiv = styled.div`
    color: #e8e8e8;
    padding: 5%;
    font-family: "Andalusia";
     font-weight: 200;
`;

export default function TopContainer() {
    return (
        <StyledContainer>
            <NameDiv>
                <div class="first">김세중</div>
                <div class="second">최유정</div>
            </NameDiv>
            <TextDiv>Wedding Day</TextDiv>
            <Contents>
                <div>2022년 9월 18일</div>
                <div>일요일 오후 3시</div>
                <div>소노펠리체 컨벤션</div>
                <div>다이아몬드홀 (단독홀)</div>
            </Contents>
        </StyledContainer>
    );
}