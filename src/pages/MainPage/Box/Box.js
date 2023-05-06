import React from 'react';
import "./Box.scss"

const Box = (props) => {
    let Name = props.name;
    return (
        <div className='box'>
            <p>{Name}</p>
        </div>
    );
}

export default Box;