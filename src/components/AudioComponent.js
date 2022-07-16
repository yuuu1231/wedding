import React, {useEffect, useState} from "react";
import ReactHowler from "react-howler";
import audio from "../audio/Some Day My Prince Will Come.mp4"
import play from "../images/play.png";
import pause from "../images/pause.png";


export default function AudioComponent() {
    const [playing, setPlaying] = useState(true);
    const [img, setImg] = useState(pause);

    const playSound = () => {
        if (playing) setPlaying(false);
        else setPlaying(true);
    };

    useEffect(() => {

    }, [])

    return (
        <div style={{paddingLeft: "80%"}}>
            <ReactHowler
                src={audio}
                playing={playing}
                volume={0.05}
            />
            <button className={playing ? "pauseBtn" : "playBtn"} onClick={playSound}/>
        </div>
    );
}

