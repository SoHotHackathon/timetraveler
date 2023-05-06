import React from 'react';
import './StartPage.scss';
import Header from '../Component/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function StartPage() {
    const movePage = useNavigate();
    const navigateToMain = () => {
        movePage("/MainPage");
    };

    return (
        <div>
            <Header></Header>
            <section className='scene one'></section>
            <div className='scrollMark'>
                <div>Scroll</div>
                <div><FontAwesomeIcon icon={faAnglesDown} /></div>
            </div>
            <div className='introTxt'>어서와요, 시간여행을 떠나볼까요?<br /><br />이순신, 아이유, 스티브잡스와 함께한 대화를 시작해봅시다!</div>
            <section className='scene two'></section>
            <div className='scrollMark'>
                <div>Scroll</div>
                <div><FontAwesomeIcon icon={faAnglesDown} /></div>
            </div>
            <div className='scrollMark'>
                <div>Scroll</div>
                <div><FontAwesomeIcon icon={faAnglesDown} /></div>
            </div>
            <div className='introTxt'>과거와 미래를 넘나들며 새로운 이야기를 만나보세요.</div>
            <section className='scene three'></section>
            <div className='introTxt'>세계적인 인물들과 대화하는 시간여행, 지금부터 시작합니다.</div>
            <section className='scene four'></section>
            <div className='introTxt'>과거와 미래를 넘나들며 새로운 시각을 발견해보세요.</div>
            <section className='scene five'></section>
        </div>
    );
}

export default StartPage;