import React from 'react';
import MapComponent from "../components/MapComponent";


export default function MapContainer() {
    return (
        <div>
            <div className="titleDiv">
                찾아오시는 길
            </div>
            <MapComponent/>
        </div>
    );
}