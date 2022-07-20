//rsfp
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './style.css'

ColorBox.propTypes = {
    
};

function getRandomColor() {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const randomIndex = Math.trunc(Math.random() * 5); /** Math.trunc:Lay phan nguyen*/
    return COLOR_LIST[randomIndex]
}

function ColorBox () {
    // const initColor = localStorage.getItem('box_color') || 'deeppink';
    // const [color, setColor] = useState('deeppink');
    // console.log(initColor);
    // const [color, setColor] = useState(initColor);
    // cach Initial state callback chỉ thực thi 1 lần đầu.
    const [color, setColor] = useState(() =>{
    const initColor = localStorage.getItem('box_color') || 'deeppink';
    console.log(initColor);
    return initColor;

    });
    


    function handleBoxClick() {
        // get ramdom color -> set color
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor);
    }
    return (
        <div className='color-box'
        style={{backgroundColor: color}}
        onClick={handleBoxClick}
        >
          COLOR BOX  
        </div>
    );
};


export default ColorBox;
