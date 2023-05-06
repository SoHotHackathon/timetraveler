import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';


function Header() {
  const movePage = useNavigate();
  const location = useLocation();
  const navigateToMain = () => {
    movePage("/MainPage");
  };
  const navigateToHome = () => {
    movePage("/");
  };

  return (
    <header>
      <h1>시간여행</h1>
      <div className='buttonGroup'>
        {(location.pathname!=='/') ? null : (
          <button className='start' onClick={navigateToMain}>시작하기</button>
        )}
        {(location.pathname!=='/MainPage') ? null : (
          <button className='iconBtn'><FontAwesomeIcon icon={faChartColumn} /></button>
        )}
        <button className='iconBtn' onClick={navigateToHome}><FontAwesomeIcon icon={faHouse} /></button>
        <button className='iconBtn'><FontAwesomeIcon icon={faUser} /></button>
      </div>
    </header>
  );
}

export default Header;