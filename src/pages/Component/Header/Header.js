import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHouse, faUser, faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';


function Header() {
  const movePage = useNavigate();
  const location = useLocation();
  const isStartPage = location.pathname==='/';
  const isMainPage = location.pathname==='/MainPage';
  const navigateToMain = () => {
    movePage("/MainPage");
  };
  const navigateToHome = () => {
    movePage("/");
  };

  let bgColorClass = '';

  if (isStartPage) {
    bgColorClass = 'start';
  } else if (isMainPage) {
    bgColorClass = 'main';
  }

  return (
    <header className={`${bgColorClass}`}>
      <h1>시간여행</h1>
      {isMainPage && (
        <div className='inputBox'>
          <button className='inputBtn'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          <input className='inputField' placeholder='검색'/>
        </div>
      )}
      <div className='buttonGroup'>
        {isStartPage && (
          <button className='startBtn' onClick={navigateToMain}>시작하기</button>
        )}
        {isMainPage && (
          <button className='iconBtn'><FontAwesomeIcon icon={faChartColumn} /></button>
        )}
        <button className={`iconBtn ${bgColorClass}`} onClick={navigateToHome}><FontAwesomeIcon icon={faHouse} /></button>
        <button className={`iconBtn ${bgColorClass}`}><FontAwesomeIcon icon={faUser} /></button>
      </div>
    </header>
  );
}

export default Header;