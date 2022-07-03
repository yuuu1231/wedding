import styled from "styled-components";

import Fade from 'react-reveal/Fade';

const ContentContainer = styled.div`
    height: 20vh;
    color: #616161;
    font-family: "MaruBuri";
    text-align: center;
    align-items: center;
    padding-top: 10%;
    padding-bottom: 30%;
`;

const TextDiv= styled.div`
    padding: 2%;
    font-weight: 200;
`;
const TextDivBold = styled.div`
    padding: 5%;
    font-weight: 400;
    
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
                <TextDiv>그 자리에 함께하여</TextDiv>
            </Fade>
            <Fade bottom>
                <TextDiv>축복해주시면 감사하겠습니다.</TextDiv>
            </Fade>
            <Fade bottom>
                <TextDiv>.</TextDiv>
            </Fade>
        </ContentContainer>
    </div>);
}