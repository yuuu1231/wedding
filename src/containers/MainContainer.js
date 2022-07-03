import styled from "styled-components";
import "../font/font.css";
import BodyContainer from "./BodyContainer";
import texture from "../img/natural-paper.png";
import TopContainer from "./TopContainer";

const Main = styled.div`
    width: 100vw;
    background-color: #f7f1f0;
    background-image: url(${texture});
`;

function MainContainer() {
    return (
        <Main>
            <TopContainer/>
            <BodyContainer/>
        </Main>
    );
}

export default MainContainer;