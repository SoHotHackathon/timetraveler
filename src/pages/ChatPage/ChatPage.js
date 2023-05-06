import React, { useEffect, useState } from 'react';
import './ChatPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faChevronLeft, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ChatPage(props) {
  const [memberId, setMemberId] = useState(1);
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [inputTxt, setInputTxt] = useState("고민이에요");

  const handleClickBtn = async() => {
    if (!isBtnClicked) {
      setIsBtnClicked(true);
      const response = await axios({
        url: 'http://ec2-54-180-24-100.ap-northeast-2.compute.amazonaws.com:8080/api/v1/member/new',
        method: 'post',
        data: {
          age: props.age,
          consulting: inputTxt,
          gender: props.gender,
          job: props.job,
          mbti: props.mbti,
          name: "string"
        }
      });
      const result = response.data;
      console.log(result);
      setMemberId(result);

      const response2 = await axios({
        url: `http://ec2-54-180-24-100.ap-northeast-2.compute.amazonaws.com:8080/api/v1/chat/people?member_id='${memberId}'&person_id='${1}`,
        method: 'post',
      });
      const result2 = response2.data;
      console.log(result2);
    }
  };
  const handleInputTxtChange = (event) => {
    setInputTxt(event.target.value);
  }

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
          <input type='text' className='chat-input' onChange={handleInputTxtChange} />
          <button className='send-btn' onClick={handleClickBtn}>전송</button>
        </span>
      </div>
    </div>

  );
}

export default ChatPage;