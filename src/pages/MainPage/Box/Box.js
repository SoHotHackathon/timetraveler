import React from 'react';
import "./Box.scss"

const Box = (props) => {
    let Name = props.name;


    return (
        <div className='box' onClick={props.onClick}>
            <p>{Name}</p>
        </div>
    );
}

export default Box;