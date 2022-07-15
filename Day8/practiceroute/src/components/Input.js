import React from 'react';
import {useParams} from 'react-router-dom';

const Number = () => {
    const {input} = useParams();

    return (
        <>
            <h1>{isNaN(input)? `Your word is: ${input}`: `Your number is: ${input}`}</h1>
        </>
    );
}

export default Number;