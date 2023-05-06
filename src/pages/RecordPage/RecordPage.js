import React from 'react';
import './RecordPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function RecordPage({ onClose }) {
  return (
    <div className='RecordPage'>
      <h1 className='RecordPage-title'>시간여행의 기록</h1>
      <div className='record-list'>
        <div className='record-box'>
          <button className='record-pic'>인물사진</button>
          <p className='record-name'>인물 이름</p>
          <p className='record-category'>카테고리</p>
          <p className='record-date'>2023년 05월 07일</p>
        </div>
        <div className='record-box'>
          <button className='record-pic'>인물사진</button>
          <p className='record-name'>인물 이름</p>
          <p className='record-category'>카테고리</p>
          <p className='record-date'>2023년 05월 07일</p>
        </div>
        <div className='record-box'>
          <button className='record-pic'>인물사진</button>
          <p className='record-name'>인물 이름</p>
          <p className='record-category'>카테고리</p>
          <p className='record-date'>2023년 05월 07일</p>
        </div>
      </div>

    </div>

  );
}

export default RecordPage;