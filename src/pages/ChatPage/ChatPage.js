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
  const [conversation, setConversation] = useState();

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

      const response2 = await axios.post(`http://ec2-54-180-24-100.ap-northeast-2.compute.amazonaws.com:8080/api/v1/chat/people?member_id=${memberId}&person_id=1`);
      const result2 = response2.data.conversation;
      console.log(result2);

      const result3 = [];
      for(let i=0; i<result2.length; i++) {
        if(i%2==0) {
          result3.push(<li className='sent message'><span>{result2[i].message}</span></li>)
        } else {
          result3.push(<li className='received message'><span>{result2[i].message}</span></li>)
        }
      }
      setConversation(result3);
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
          <li className='received message'><span>안녕하세요 고민이 뭔가요?</span></li>
          {conversation}
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