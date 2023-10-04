import './Headline.css';
import React from 'react';

function Headline({heading, className}) {
    return (
        <div className={className}>
            <h2 className='heading'>{heading}</h2>
        </div>
    )
}

export default Headline;