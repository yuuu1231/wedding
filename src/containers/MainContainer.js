import styled from "styled-components";
import "../font/font.css";
import BodyContainer from "./BodyContainer";
import texture from "../images/background/natural-paper.png";
import TopContainer from "./TopContainer";
import GalleryContainer from "./GalleryContainer";

const Main = styled.div`
    width: 100vw;
    background-color: #f7f1f0;
    background-image: url(${texture});
`;

export default function MainContainer() {
    return (
        <Main>
            <TopContainer/>
            <BodyContainer/>
            <GalleryContainer/>
        </Main>
    );
}