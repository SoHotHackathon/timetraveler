import React from 'react';
import './ChatPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faChevronLeft, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function ChatPage(props) {
  const movePage = useNavigate();
  const navigateToBack = () => {
    movePage(-1);
  };

  return (
    <div className='ChatPage'>
      <div className='chat-head'>
        <FontAwesomeIcon icon={faChevronLeft} className='back-icon' onClick={navigateToBack} />
        <div className='top-profile'>
          <FontAwesomeIcon icon={faCircleUser} className='profile-icon' />
          <span className='profile-name'>이름 &gt;</span>
        </div>
        <FontAwesomeIcon icon={faFloppyDisk} className='save-icon' />
      </div>
      <div className='display-container'>
        <ul className='chat-list'>
          <li className='received message'>
            <span>안녕하세요. 고민이 무엇인가요?</span>
          </li>
          <li className='sent message'>
            <span>공부가 하기 싫어요</span>
          </li>
        </ul>
      </div>
      <div className='input-container'>
        <span>
          <input type='text' className='chat-input' />
          <button className='send-btn'>전송</button>
        </span>
      </div>
    </div>

  );
}

export default ChatPage;