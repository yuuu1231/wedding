import Gallery from 'react-grid-gallery';
import Img1 from "../images/gallery/0709_V_220609.jpg";
import Img2 from "../images/gallery/1080_V_220609.jpg";
import Img3 from "../images/gallery/0031_V_220609.jpg";
import Img4 from "../images/gallery/1157_V_220609.jpg";
import styled from "styled-components";

const IMAGES = [
    {
        src: Img1,
        thumbnail: Img1,
        thumbnailWidth: 500
    },
    {
        src: Img2,
        thumbnail: Img2,
        //thumbnailWidth: 500
    },
    {
        src: Img3,
        thumbnail: Img3,
        //thumbnailWidth: 500
    },
    {
        src: Img4,
        thumbnail: Img4,
        //thumbnailWidth: 500
    }
]

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
            <Gallery images={IMAGES}/>
        </div>
    );
}