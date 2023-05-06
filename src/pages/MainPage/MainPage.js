import React from 'react';
import Box from './Box/Box';
import './MainPage.scss';
import Header from '../Component/Header/Header';
import CategoryBox from './CategoryBox/CategoryBox';

function MainPage() {
  return (
    <div className='fullPage'>
      <Header />
      <div className='mainPage'>
        <div className='container'>
          <Box name="아이유" />
          <Box name="손흥민" />
          <Box name="이순신" />
        </div>
        <div className='container'>
          <Box name="잡스" />
          <Box name="박지성" />
          <Box name="몰라" />
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