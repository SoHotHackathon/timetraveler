import React from 'react';
import './ProfilePage.scss';

function ProfilePage() {
  return (
    <div className='ProfilePage'>
      <div className='Profile'>
        <div className='form'>
          <div className='form-title'>
            😀나의 프로필 작성하기😀
          </div>

          <div className='age-input'>
            <label for='num'>나이 : </label>
            <input id='num' name='num' type='number' />
          </div>
          <div className='sex-input'>
            <lable for="sex">성별 : </lable>
            남 <input type="radio" name="sex" />
            여 <input type="radio" name="sex" />
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
            <label for='mbti'>MBTI : </label>
            <input type='text' name='mbti' id='mbti' />
          </div>
          <button className='enter-btn'>
            입장하기
          </button>
        </div>
      </div>
    </div>

  );
}

export default ProfilePage;