import styled from "styled-components";
import mainImg from "../img/main.jpg"
import "../font/font.css";
import BodyContainer from "./BodyContainer";


const StyledContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${mainImg});
      background-size: cover;
      width: 500px;
`;

const Title = styled.div`
    color: #e3e3e3;
    font-size: 20;
    text-align: center;
    padding: 20em 10em;
    font-family: "Kotra";
`;

function MainContainer() {

    return (
        <div>
            <StyledContainer>
                <Title>
                    <div>최유정 김세중</div>
                    <div>2022.09.18</div>
                </Title>
                <BodyContainer></BodyContainer>
            </StyledContainer>
        </div>
    );

}

export default MainContainer;