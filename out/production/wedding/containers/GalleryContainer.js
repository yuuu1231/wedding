import React from 'react';
import Img1 from "../images/gallery/0709_V_220609.jpg";
import Img2 from "../images/gallery/1080_V_220609.jpg";
import Img3 from "../images/gallery/0031_V_220609.jpg";
import Img4 from "../images/gallery/1157_V_220609.jpg";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const IMAGES = [
    {
        original: Img1,
        thumbnail: Img1,
        originalWidth: 200,
        thumbnailHeight: 100,
        thumbnailWidth: 100,

    },
    /*{
        original: Img2,
        thumbnail: Img2,
        originalWidth: 200,
        thumbnailHeight: 100,
        thumbnailWidth: 100,
    },
    {
        original: Img3,
        thumbnail: Img3,
        originalWidth: 200,
        thumbnailHeight: 100,
        thumbnailWidth: 100,
    },
    {
        original: Img4,
        thumbnail: Img4,
        originalWidth: 200,
        thumbnailHeight: 100,
        thumbnailWidth: 100,
    },*/
];


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
{/*            <Gallery images={IMAGES}/>*/}
            <ImageGallery items={IMAGES}/>
        </div>
    );
}