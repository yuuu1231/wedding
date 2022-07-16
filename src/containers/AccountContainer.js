import React from 'react';
import Fade from 'react-reveal/Fade';
import AccordionComponent from "../components/AccodionComponent";


export default function AccountContainer() {
    return (
        <div>
            <Fade bottom>
                <div className="titleDiv">마음 전하실 곳</div>
                <AccordionComponent/>
            </Fade>
        </div>
    );
}