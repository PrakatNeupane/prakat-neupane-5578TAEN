import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/landing-page/LandingPage';
import EventCreate from './components/event-creation-page/EventCreate';
import EventPage from './components/main-event-page/EventPage';
import { useState } from 'react';


function App() {
  const [userData, setUserData] = useState({})
  const [img, setImg] = useState('')
  const receiveFormData = form => {
    const month = form.eventStartDate.toLocaleString('default', { month: 'long' });
    setUserData(form)
  }
  const receiveImage = image => {
    setImg(image)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<EventCreate receiveImage={receiveImage} receiveFormData={receiveFormData} />} />
          <Route path="/event" element={<EventPage userData={userData} img={img} />} />
          <Route path='*' element={<h1>404 not found</h1>}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
