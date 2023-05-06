import React from 'react';
import './RecordPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function RecordPage({ onClose }) {
  return (
    <div className='RecordPage'>
      <div className='Record'>
        <button className='xBtn' onClick={onClose}><FontAwesomeIcon icon={faXmark} /></button>
        <div className='record-form'>
          <div className='RecordPage-title'>시간여행의 기록</div>
          <div className='record-list'>
            <div className='record-box'>
              <button className='record-pic'></button>
              <p className='record-name'>폰노이만</p>
              <p className='record-category'>과학자</p>
              <p className='record-date'>2023년 05월 07일</p>
            </div>
            <div className='record-box'>
              <button className='record-pic'></button>
              <p className='record-name'>빌게이츠</p>
              <p className='record-category'>공학자</p>
              <p className='record-date'>2023년 05월 07일</p>
            </div>
            <div className='record-box'>
              <button className='record-pic'></button>
              <p className='record-name'>세르게이 브린</p>
              <p className='record-category'>공학자</p>
              <p className='record-date'>2023년 05월 07일</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default RecordPage;