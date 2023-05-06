import React, { useState } from 'react';
import Box from './Box/Box';
import './MainPage.scss';
import Header from '../Component/Header/Header';
import CategoryBox from './CategoryBox/CategoryBox';
import ProfilePage from '../ProfilePage/ProfilePage';

function MainPage() {
  const [showModal, setShowModal] = useState(false);
  const handleButtonClick = () => {
    setShowModal(true);
  }
  const handleModalClose = () => {
    setShowModal(false);
  }


  return (
    <div className='fullPage'>
      {showModal && (
        <ProfilePage onClose={handleModalClose} />
      )}
      <Header />
      <div className='mainPage'>
        <div className='container'>
          <Box name="아이유" onClick={handleButtonClick} />
          <Box name="손흥민" onClick={handleButtonClick} />
          <Box name="이순신" onClick={handleButtonClick} />
        </div>
        <div className='container'>
          <Box name="잡스" onClick={handleButtonClick} />
          <Box name="박지성" onClick={handleButtonClick} />
          <Box name="몰라" onClick={handleButtonClick} />
        </div>
        <div className='category-list'>
          <CategoryBox categoryname="철학자" />
          <CategoryBox categoryname="공학자" />
          <CategoryBox categoryname="종교인" />
          <CategoryBox categoryname="예술가" />
          <CategoryBox categoryname="과학자" />
          <CategoryBox categoryname="운동선수" />
          <CategoryBox categoryname="연예인" />
        </div>
      </div>
    </div>

  );
}

export default MainPage;