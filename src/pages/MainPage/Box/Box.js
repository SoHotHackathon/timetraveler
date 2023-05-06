import React from 'react';
import "./Box.scss"
import { useNavigate } from 'react-router';

const Box = (props) => {
    let Name = props.name;
    const movePage = useNavigate();
    const navigateToProfile = () => {
        movePage("/ProfilePage");
    }

    return (
        <div className='box' onClick={navigateToProfile}>
            <p>{Name}</p>
        </div>
    );
}

export default Box;