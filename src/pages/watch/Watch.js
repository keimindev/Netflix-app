import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react';
import "./watch.scss";
import trailer from './IMG_0013.MOV';

const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video className="video" autoPlay progress controls src={trailer} />
        </div>
    )
}

export default Watch
