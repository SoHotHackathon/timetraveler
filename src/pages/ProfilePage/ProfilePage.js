import React, { useState } from 'react';
import './ProfilePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';

function ProfilePage({onClose}) {
  const [selectMBTI, setSelectedMBTI] = useState('ISTJ');
  const [selectJOB, setSelectedJOB] = useState('대학생');
  const [inputAge, setInputAge] = useState(20);

  const handleSelectedMBTIChange = (event) => {
    setSelectedMBTI(event.target.value);
  }
  const handleSelectedJOBChange = (event) => {
    setSelectedJOB(event.target.value);

  }
  const movePage = useNavigate();
    const navigateToChat = () => {
        movePage("/ChatPage");
    };

  return (
    <div className='ProfilePage'>
      <div className='Profile'>
        <button className='xBtn' onClick={onClose}><FontAwesomeIcon icon={faXmark} /></button>
        <div className='form'>
          <div className='form-title'>
            <FontAwesomeIcon icon={faClipboard} />
            &nbsp;나의 프로필 작성하기
          </div>
          <div className='age-input'>
            <label for='num'>나이 :  </label>
            <input id='num' name='num' type='number' min={0} max={120}/>
          </div>
          <div className='sex-input'>
            <lable for="sex">성별 : </lable>
            &nbsp;
            남<input type="radio" name="sex" />
            &nbsp;
            여<input type="radio" name="sex" />
          </div>
          <div className='job-input'>
            직업 : <select name="job" onChange={handleSelectedJOBChange}>
              <option value='중학생'>중학생</option>
              <option value='대학생'>대학생</option>
              <option value='직장인'>직장인</option>
              <option value='무직'>무직</option>
            </select>
          </div>
          <div className='mbti-input'>
            MBTI : <select name="job" onChange={handleSelectedMBTIChange}>
              <option value='ISTJ'>ISTJ</option>
              <option value='ESTJ'>ESTJ</option>
              <option value='INTJ'>INTJ</option>
              <option value='ENTJ'>ENTJ</option>
              <option value='ISFJ'>ISFJ</option>
              <option value='ESFJ'>ESFJ</option>
              <option value='INFJ'>INFJ</option>
              <option value='ENFJ'>ENFJ</option>
              <option value='ISTP'>ISTP</option>
              <option value='ESTP'>ESTP</option>
              <option value='INTP'>INTP</option>
              <option value='ENTP'>ENTP</option>
              <option value='ISFP'>ISFP</option>
              <option value='ESFP'>ESFP</option>
              <option value='INFP'>INFP</option>
              <option value='ENFP'>ENFP</option>
            </select>
          </div>
          <button className='enter-btn' onClick={navigateToChat}>
            입장하기
          </button>
        </div>
      </div>
    </div>

  );
}

export default ProfilePage;