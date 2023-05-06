import React from 'react';
import "./Box.scss"

const Box = (props) => {
    const styles =  {
        back: {
            backgroundImage: `url("https://${props.photo}")`,
        },
    };

    return (
        <div className='boxContainer'>
            <div className='pht' onClick={props.onClick} style={styles.back} />
            <div className='txt'>{props.name} ({props.birth})</div>
        </div>
    );
}

export default Box;