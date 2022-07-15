import React from 'react';
import {useParams} from 'react-router-dom';

const WordColor = () => {
    const {string, color} = useParams();

    return (
        <h1 style={{backgroundColor: color}}>
            {isNaN(string)? `The word is: ${string}`: "Sorry, that is not a valid word"}
        </h1>
    )
}

export default WordColor