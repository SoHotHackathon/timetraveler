import React, { useState, useEffect } from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHouse, faUser, faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';


function Header({onClick}) {
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
  let curTxt = '';
  let curIdx = 0;

  if (isStartPage) {
    bgColorClass = 'start';
  } else if (isMainPage) {
    bgColorClass = 'main';
    curTxt = "시간여행";
    curIdx = curTxt.length;
  }

  const [text, setText] =  useState(curTxt)
  const [fullText, setFullText] = useState(
      "시간여행"
  )
  const [index, setIndex] = useState(curIdx)

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
          setText(text + fullText[index])
          setIndex(index + 1)
      }, 800)
    } 
  }, [index])

  return (
    <header className={`${bgColorClass}`}>
      <h1>{text}</h1>
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
        <button className={`iconBtn ${bgColorClass}`} onClick={onClick}><FontAwesomeIcon icon={faUser} /></button>
      </div>
    </header>
  );
}

export default Header;