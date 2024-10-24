import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Image } from '../components/image';
import "../components/css/image.css"

export const Dogs = () => {

    const [ImageURL, setImageURL] = useState();
    const [bgColor, setBgColor] = useState('white');
    const APIURL = "https://random.dog/woof.json"


    useEffect(() => {
        axios.get(APIURL).then((response) => {
            setImageURL(response.data["url"])

        });

    }, [])


const handleColorChange = (color) => {
    setBgColor(color);
};

    return (
        <div style={{ backgroundColor: bgColor, minHeight: '100vh' }}>
            <div className="color-picker-menu">
                <button className="color-button color-blue" onClick={() => handleColorChange('lightblue')}>Blue</button>
                <button className="color-button color-green" onClick={() => handleColorChange('lightgreen')}>Green</button>
                <button className="color-button color-red" onClick={() => handleColorChange('lightcoral')}>Red</button>
                <button className="color-button color-yellow" onClick={() => handleColorChange('gold')}>Yellow</button>
            </div>
            <div>
                <Image RandomImage={ImageURL} />
            </div>
        </div>
    );
};