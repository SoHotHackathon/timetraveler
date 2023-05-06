import React, { useState, useEffect } from 'react';
import Box from './Box/Box';
import './MainPage.scss';
import Header from '../Component/Header/Header';
import CategoryBox from './CategoryBox/CategoryBox';
import ProfilePage from '../ProfilePage/ProfilePage';
import RecordPage from '../RecordPage/RecordPage';

function MainPage() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('http://ec2-54-180-24-100.ap-northeast-2.compute.amazonaws.com:8080/api/v1/chat/people', {
  //     method: 'GET',
  //     mode:'no-cors',
  //     headers: {
  //       'Accept': '*/*',
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .then(error => console.error(error))
  // }, []);
  const getData = async() => {
    const res = await fetch(
      'http://ec2-54-180-24-100.ap-northeast-2.compute.amazonaws.com:8080/api/v1/people',
      {
        mode: 'no-cors'
      }
    ).then((res) => res.json())
    .then((myjson) => console.log(JSON.stringify(myjson)));
  }
  useEffect(() => {
    getData();
    console.log(data);
  }, [])

  const profileButtonClick = () => {
    setShowModal1(true);
  }
  const recordButtonClick = () => {
    setShowModal2(true);
  }
  const handleModalClose = () => {
    setShowModal1(false);
    setShowModal2(false);
  }

  const url1 = 'upload.wikimedia.org/wikipedia/commons/thumb/5/5e/JohnvonNeumann-LosAlamos.gif/200px-JohnvonNeumann-LosAlamos.gif';
  const url2 = 'upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Bill_Gates_2014.jpg/220px-Bill_Gates_2014.jpg';
  const url3 = 'upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sergey_Brin_cropped.jpg/200px-Sergey_Brin_cropped.jpg';


  return (
    <div className='fullPage'>
      {showModal1 && (
        <ProfilePage onClose={handleModalClose} />
      )}
      {showModal2 && (
        <RecordPage onClose={handleModalClose} />
      )}
      <Header onClick={recordButtonClick}/>
      <div className='mainPage'>
        <div className='container'>
          <Box name="폰노이만" birth="1899" onClick={profileButtonClick} photo={url1} />
          <Box name="빌게이츠" birth="1950" onClick={profileButtonClick} photo={url2} />
          <Box name="세르게이 브린" birth="1976" onClick={profileButtonClick} photo={url3} />
        </div>
        <div className='container'>
          <Box name="폰노이만" birth="1899" onClick={profileButtonClick} photo={url1} />
          <Box name="빌게이츠" birth="1950" onClick={profileButtonClick} photo={url2} />
          <Box name="세르게이 브린" birth="1976" onClick={profileButtonClick} photo={url3} />
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
      {data.map(item => (
        <div>
          <h1>afd</h1>
          <h1>{item.name}</h1>
        </div>
      ))}
    </div>

  );
}

export default MainPage;