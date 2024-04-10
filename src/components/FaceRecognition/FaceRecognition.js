import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='asd' width='500' height='auto' src={imageUrl}></img>
                <div className='bounding-box'
                    style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}
                ></div>
            </div>
        </div>
    );
}

export default FaceRecognition;