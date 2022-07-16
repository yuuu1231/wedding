import React from 'react';
import MapComponent from "../components/MapComponent";
import Fade from 'react-reveal/Fade';
import styled from "styled-components";


const Container = styled.div`
    align-items: left;
    text-align: left;
    // border: 1px solid #ccc;
    margin-top: 2%;
    margin-left:9%;
    margin-right:9%;
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 5%;
    padding-right: 5%;
`;

const LocationText = styled.div`
    padding-left: 10%;
    padding-right: 10%;
    font-size: 95%;
    font-family: 'NanumSquareAcb';
    color: #8A7376;
`;

const Line = styled.div`
    margin-top: 2%;
    margin-bottom: 3%;
    padding-left: 3%;
    padding-right: 3%;
    border-bottom: 1px solid #ccc;
`;


export default function MapContainer() {
    return (
        <div>
            <Fade bottom>
                <div className="titleDiv">오시는 길
                </div>
                <MapComponent/>
                <div className="paddingTop">
                    <LocationText> 소노펠리체 컨벤션 (도심공항터미널 3층) </LocationText>
                </div>
                <Container>
                    <div className="mapDescLv1">자가용</div>
                    <div className="mapDescLv2">한국도심공항 터미널 주차장 이용</div>
                    <Line/>
                    <div className="mapDescLv1">지하철</div>
                    <div>
                        <div className="mapDescLv2"><span style={{color: "#2F9F27"}}>2호선</span> 삼성역 5번 출구 도보 약 7분</div>
                        <div className="mapDescLv3">* 지하 코엑스몰 이동보다는 <span className="fontBold">지상으로</span> 찾아오시면 편리합니다.
                        </div>
                        <div className="mapDescLv2"><span style={{color: "#B0963C"}}>9호선</span> 봉은사역 7번 출구 도보 약 10분
                        </div>
                    </div>
                    <Line/>
                    <div className="mapDescLv1">버스</div>
                    <div>
                        <div className="mapDescLv2">한국무역센터삼성역 정류장 (정류장 코드 23-201)</div>
                        <div className="mapDescLv3"><span className="fontBold">간선</span> 146, 333, 341, 360, 740</div>
                        <div className="mapDescLv3"><span className="fontBold">지선</span> 3411 | <span
                            className="fontBold">광역</span> M6450
                        </div>
                        <div className="mapDescLv3"><span className="fontBold">직행</span> 1100, 1700, 2000, 2000-1, 7007,
                            500-2, 9303
                        </div>
                    </div>
                </Container>
            </Fade>
        </div>
    );
}