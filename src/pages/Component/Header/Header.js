import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGear } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


function Header() {
  const movePage = useNavigate();
  const navigateToMain = () => {
    movePage("/MainPage");
  };

  return (
    <header>
      <h1>시간여행</h1>
      <div className='buttonGroup'>
        <button className='start' onClick={navigateToMain}>시작하기</button>
        <button className='iconBtn'><FontAwesomeIcon icon={faHouse} /></button>
        <button className='iconBtn'><FontAwesomeIcon icon={faGear} /></button>
      </div>
    </header>
  );
}

export default Header;