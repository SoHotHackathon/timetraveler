import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage/StartPage';
import MainPage from './pages/MainPage/MainPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ChatPage from './pages/ChatPage/ChatPage';
import RecordPage from './pages/RecordPage/RecordPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
