import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGear } from '@fortawesome/free-solid-svg-icons';


function Header(){
    return <header>
      <h1>시간여행</h1>
      <div className='buttonGroup'>
        <button onlcick='' className='start'>시작하기</button>
        <button className='iconBtn'><FontAwesomeIcon icon={faHouse}/></button>
        <button className='iconBtn'><FontAwesomeIcon icon={faGear}/></button>
      </div>
    </header>
}

export default Header;