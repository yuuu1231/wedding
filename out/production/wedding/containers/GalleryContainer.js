import React from 'react';
import Img1 from "../images/gallery/img (1).jpg";
import Img2 from "../images/gallery/img (2).jpg";
import Img3 from "../images/gallery/img (3).jpg";
import Img4 from "../images/gallery/img (4).jpg";
import Img5 from "../images/gallery/img (5).jpg";
import Img6 from "../images/gallery/img (6).jpg";
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


export default function GalleryContainer() {
    return (
        <div>
            <div className="titleDiv">Gallery</div>
            <ReactPhotoCollage {...setting} />
        </div>
    );
}