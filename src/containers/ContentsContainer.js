import React from 'react';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import leaf_picture from "../images/pictures/leaf.png";
import tel from "../images/pictures/tel_pictogram.png";
import YuuPic from "../images/gallery/Img19.jpg";
import Img25 from "../images/gallery/Img25.jpg";

const ContentContainer = styled.div`
        padding-top: 15%;
        padding-bottom: 15%;
    `;

const TitleDiv = styled.div`
        padding-bottom: 10%;
        font-family: 'NanumSquareacB';
        font-size: 100%;
    `;

const BodyDiv = styled.div`
        padding: 2%;
    `;

const StyledSpan = styled.span`
        margin-left:2%;
        font-family: 'NanumSquareAceb';
    `;

const Picture = styled.img`
        width: 80%;
        padding-bottom: 5%;
        padding-top: 5%;
    `;

const TelPic = styled.img`
        width: 12%;
        vertical-align: middle;
        padding-left: 3%;
    `;

const PersonalPhoto = styled.img`
        width: 40%;
        padding-top: 10%;
        padding-right: 1%;
    `;
export default function ContentsContainer() {
    return (<div>
            <ContentContainer>
                <Fade bottom>
                    <Picture src={leaf_picture}/>
                </Fade>

                <Fade bottom cascade>
                    <TitleDiv>초대합니다.</TitleDiv>
                    <BodyDiv>9월의 좋은 날</BodyDiv>
                    <BodyDiv>결혼합니다.</BodyDiv>
                    <BodyDiv>함께하여</BodyDiv>
                    <BodyDiv>축복해주시면 감사하겠습니다.</BodyDiv>
                </Fade>
                <Fade bottom>
                    <Picture src={leaf_picture}/>
                </Fade>
                <Fade bottom>
                </Fade>
                <Fade bottom cascade>
                    <div className="nameDiv"><span>김용석 · 김난주</span><span
                        className="smallFont">의 장남</span><StyledSpan>김세중</StyledSpan></div>
                    <div className="nameDiv"><span>최성대 · 백순조</span><span
                        className="smallFont">의 장녀</span><StyledSpan>최유정</StyledSpan></div>
                </Fade>

                <Fade bottom>
                    <div>
                        <PersonalPhoto src={Img25}/>
                        <PersonalPhoto src={YuuPic}/>
                    </div>
                    <div className="telSection">
                        <div className="telDiv"><span className="fontRegular">신랑</span>에게 전화하기<a
                            href='tel:010-6510-9229'><TelPic src={tel}/></a></div>
                        <div className="telDiv"><span className="fontRegular">신부</span>에게 전화하기<a
                            href='tel:010-6510-9229'><TelPic src={tel}/></a></div>
                    </div>
                </Fade>
            </ContentContainer>
        </div>
    )
        ;
}