import styled from "styled-components";
import mainImg from "../images/background/main_black.png";
import "../App.css";
import shape from "../images/shape/img_2.png";

const StyledContainer = styled.div`
    background-size: 100%;
    background-image: url(${mainImg});
    background-repeat: no-repeat;
`;
const StyledImg = styled.div`
    background-size: 100%;
    background-image: url(${shape});
    background-repeat: no-repeat;
`;
const NameDiv = styled.div`
    color: #595454;
    padding: 5%;
    font-family: "MaruBuri";
    font-weight: 100;
    display: flex;
`;
const TextDiv = styled.div`
    color: #e4e4e4;
    font-size:200%;
    font-family: "Andalusia";
    font-weight: 200;
    text-align: center;
    padding-top: 120%;
`;

const Contents = styled.div`
    font-size: 90%;
    text-align: center;
    color: #424242;
    font-family: "MaruBuri";
    font-weight: 100;
    padding-top: 30%;
    padding-bottom: 20%;
`;

export default function TopContainer() {
    return (
        <StyledContainer>
            <StyledImg>
                <TextDiv>
                    <div>The Wedding Day of</div>
                    <div>Sejoong & Yujeong</div>
                </TextDiv>
                <Contents>
                    <div>2022년 9월 18일 일요일 오후 3시</div>
                    <div>소노펠리체 컨벤션 다이아몬드홀 (단독홀)</div>
                </Contents>
            </StyledImg>
            {/*            <NameDiv>
                <div class="first">김세중</div>
                <div class="second">최유정</div>
            </NameDiv>*/}
        </StyledContainer>
    );
}