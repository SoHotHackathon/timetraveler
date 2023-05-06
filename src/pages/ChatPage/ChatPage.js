import React from 'react';
import './ChatPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

function ChatPage() {

  return (
    <div className='ChatPage'>
      <div className='chat-head'>
        {/* 뒤로가기 or 종료 아이콘 */}
        <div>
          <FontAwesomeIcon icon={faCircleUser} className='profile-icon'/>
          <span className='profile-name'>이름&gt;</span>
        </div>
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
        <input type='text' className='chat-input' />
        <button className='send-btn'>전송</button>
      </div>
    </div>

  );
}

export default ChatPage;