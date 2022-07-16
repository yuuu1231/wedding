import * as React from "react";
import Fade from 'react-reveal/Fade';
import Img1 from "../images/gallery/Img1.JPG";
import Img2 from "../images/gallery/Img2.JPG";
import Img3 from "../images/gallery/Img3.JPG";
import Img4 from "../images/gallery/Img4.JPG";
import Img5 from "../images/gallery/Img5.JPG";
import Img6 from "../images/gallery/Img6.JPG";
import Img7 from "../images/gallery/Img7.JPG";
import Img8 from "../images/gallery/Img8.JPG";
import Img9 from "../images/gallery/Img9.JPG";
import Img10 from "../images/gallery/Img10.JPG";
import Img11 from "../images/gallery/Img11.JPG";
import Img12 from "../images/gallery/Img12.JPG";
import Img13 from "../images/gallery/Img13.JPG";
import Img14 from "../images/gallery/Img14.JPG";
import Img16 from "../images/gallery/Img16.JPG";
import Img17 from "../images/gallery/Img17.JPG";
import Img18 from "../images/gallery/Img18.JPG";
import Img19 from "../images/gallery/Img19.jpg";
import Img20 from "../images/gallery/Img20.jpg";
import Img21 from "../images/gallery/Img21.jpg";
import Img22 from "../images/gallery/Img22.jpg";
import Img23 from "../images/gallery/Img23.jpg";
import Img24 from "../images/gallery/Img24.jpg";

import {ReactPhotoCollage} from "react-photo-collage";
import styled from "styled-components";


const setting = {
    width: "100%",
    height: ["100px", "100px", "100px"],
    layout: [5, 5, 5],
    photos: [
        {source: Img24},
        {source: Img19},
        {source: Img1},
        {source: Img2},
        {source: Img3},
        {source: Img4},
        {source: Img5},
        {source: Img6},
        {source: Img7},
        {source: Img8},
        {source: Img9},
        {source: Img10},
        {source: Img11},
        {source: Img12},
        {source: Img13},
        {source: Img14},
        {source: Img16},
        {source: Img17},
        {source: Img18},
        {source: Img20},
        {source: Img21},
        {source: Img22},
        {source: Img23},
    ],
    showNumOfRemainingPhotos: true
};

const TextDiv = styled.div`
    font-family: 'NanumSquareAcl';
    font-size: 80%;
    padding-bottom: 10%;
`;


export default function GalleryContainer() {
    return (
        <div>
            <Fade bottom>
                <div className="titleDivLarge">Gallery</div>
                <TextDiv>슬라이드하여 다음 사진을 보실 수 있습니다.</TextDiv>
                <ReactPhotoCollage {...setting} />
            </Fade>
        </div>
    );
}