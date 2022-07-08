import React from 'react';
import Img1 from "../images/gallery/0709_V_220609.jpg";
import Img2 from "../images/gallery/1080_V_220609.jpg";
import Img3 from "../images/gallery/0031_V_220609.jpg";
import Img4 from "../images/gallery/1157_V_220609.jpg";
import styled from "styled-components";
import {ReactPhotoCollage} from "react-photo-collage";


const setting = {
    width: "100%",
    height: ["200px", "200px", "200px"],
    layout: [3, 3, 3],
    photos: [
        {
            source: Img1
        },
        {
            source: Img2
        },
        {
            source: Img3
        },
        {
            source: Img4
        },
    ],
    showNumOfRemainingPhotos: true
};


const TextDiv = styled.div`
    color: #616161;
    font-family: "MaruBuri";
    text-align: center;
    align-items: center;
    padding-bottom: 5%;
`;


export default function GalleryContainer() {
    return (
        <div>
            <TextDiv>Gallery</TextDiv>
            <ReactPhotoCollage {...setting} />
        </div>
    );
}