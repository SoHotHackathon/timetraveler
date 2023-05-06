import React from 'react';
import './ProfilePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';

function ProfilePage({onClose}) {
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
            직업 : <select name="job">
              <option value='op1'>중학생</option>
              <option value='op1'>대학생</option>
              <option value='op1'>직장인</option>
              <option value='op1'>무직</option>
            </select>
          </div>
          <div className='mbti-input'>
            MBTI : <select name="job">
              <option value='op1'>ISTJ</option>
              <option value='op1'>ESTJ</option>
              <option value='op1'>INTJ</option>
              <option value='op1'>ENTJ</option>
              <option value='op1'>ISFJ</option>
              <option value='op1'>ESFJ</option>
              <option value='op1'>INFJ</option>
              <option value='op1'>ENFJ</option>
              <option value='op1'>ISTP</option>
              <option value='op1'>ESTP</option>
              <option value='op1'>INTP</option>
              <option value='op1'>ENTP</option>
              <option value='op1'>ISFP</option>
              <option value='op1'>ESFP</option>
              <option value='op1'>INFP</option>
              <option value='op1'>ENFP</option>
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