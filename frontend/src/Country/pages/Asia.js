import React from 'react';
import '../Styles/Asia.css';
import TajMahal from '../Images/Asia/TajMahal.jpg';
import MtFuji from '../Images/Asia/MtFuji.jpg';
import Angkor from '../Images/Asia/Angkor.jpeg';
import GreatWall from '../Images/Asia/GreatWall.jpg';
import HaLongBay from '../Images/Asia/HoLongBay.jpg';
import { useNavigate } from 'react-router-dom';

const Asia = () => {
  const navigate = useNavigate();

  

  return (
    <div className="asia-container">
      <h1>Asia</h1>

      <div className="row">
        <div className="box">
          <img src={TajMahal} alt="Taj Mahal" />
          <p>A white marble mausoleum in Agra, built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal.</p>
          <p>Amount: $1815</p>
          <button className="but" onClick={() => navigate('/form')}>Book Now</button>
        </div>

        <div className="box">
          <img src={MtFuji} alt="Mount Fuji" />
          <p>Japan's tallest mountain and a sacred symbol of beauty and culture.</p>
          <p>Amount: $1895</p>
          <button className="but" onClick={() => navigate('/form')}>Book Now</button>
        </div>
      </div>

      <div className="row">
        <div className="box">
          <img src={Angkor} alt="Angkor Wat" />
          <p>The world's largest religious monument, built during the Khmer Empire in Cambodia.</p>
          <p>Amount: $1945</p>
          <button className="but" onClick={() => navigate('/form')}>Book Now</button>
        </div>

        <div className="box">
          <img src={GreatWall} alt="Great Wall of China" />
          <p>A 21,000 km ancient wall built to protect Chinese territories.</p>
          <p>Amount: $1900</p>
          <button className="but" onClick={() => navigate('/form')}>Book Now</button>
        </div>
      </div>

      <div className="row center-row">
        <div className="box full-width">
          <img src={HaLongBay} alt="Ha Long Bay" />
          <p>A UNESCO World Heritage site in Vietnam known for emerald waters and limestone islands.</p>
          <p>Amount: $1875</p>
          <button className="but" onClick={() => navigate('/form')}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Asia;
