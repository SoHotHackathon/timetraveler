import React from 'react';
import Box from './Box/Box';
import './MainPage.scss';
import Header from '../Component/Header/Header';

function MainPage() {
    return (
        <div>
          {/* <Header /> */}
          <div className='container'>
            <Box name="아이유"/>
            <Box name="손흥민"/>
            <Box name="이순신"/>
            <Box name="잡스"/>
            <Box name="박지성"/>
            <Box name="몰라"/>
          </div>
        </div>
    );
}

export default MainPage;