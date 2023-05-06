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

  const url1 = 'upload.wikimedia.org/wikipedia/commons/thumb/5/5e/JohnvonNeumann-LosAlamos.gif/200px-JohnvonNeumann-LosAlamos.gif';
  const url2 = 'upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Bill_Gates_2014.jpg/220px-Bill_Gates_2014.jpg';
  const url3 = 'upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sergey_Brin_cropped.jpg/200px-Sergey_Brin_cropped.jpg';


  return (
    <div className='fullPage'>
      {showModal && (
        <ProfilePage onClose={handleModalClose} />
      )}
      <Header />
      <div className='mainPage'>
        <div className='container'>
          <Box name="폰노이만" birth="1899" onClick={handleButtonClick} photo={url1} />
          <Box name="빌게이츠" birth="1950" onClick={handleButtonClick} photo={url2} />
          <Box name="세르게이 브린" birth="1976" onClick={handleButtonClick} photo={url3} />
        </div>
        <div className='container'>
          <Box name="폰노이만" birth="1899" onClick={handleButtonClick} photo={url1} />
          <Box name="빌게이츠" birth="1950" onClick={handleButtonClick} photo={url2} />
          <Box name="세르게이 브린" birth="1976" onClick={handleButtonClick} photo={url3} />
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