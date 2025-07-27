import React from 'react';
import '../Styles/Australia.css';
import Sydney from '../Images/Australia/Sydney Open House.jpg';
import Uluru from '../Images/Australia/Uluru.jpg';
import Reef from '../Images/Australia/1.jpg';
import Milford from '../Images/Australia/Milford Sound.jpg';
import BoraBora from '../Images/Australia/Bora Bora.jpg';
import { useNavigate } from 'react-router-dom';

const Australia = () => {
  const navigate = useNavigate();

  return (
    <div className="australia-container">
      <h1>AUSTRALIA & OCEANIA</h1>

      <div className="row">
        <div className="box">
          <img src={Sydney} alt="Sydney Opera House – Australia" />
          <p>A modern architectural icon on Sydney’s harbor, hosting world-class performances in opera, music, and theater.</p>
          <p>Amount: $2815</p>
          <button className="but" onClick={() => navigate('/form')}>Book Now</button>
        </div>

        <div className="box">
          <img src={Uluru} alt="Uluru (Ayers Rock) – Australia" />
          <p>A massive sandstone monolith in the Outback, sacred to Aboriginal people and known for changing color at sunrise and sunset.</p>
          <p>Amount: $2515</p>
          <button className="but" onClick={() => navigate('/form')}>Book Now</button>
        </div>

        <div className="box">
          <img src={Reef} alt="Great Barrier Reef – Australia" />
          <p>The world’s largest coral reef system, offering vibrant marine life, snorkeling, and diving experiences.</p>
          <p>Amount: $2615</p>
          <button className="but" onClick={() => navigate('/form')}>Book Now</button>
        </div>

        <div className="box">
          <img src={Milford} alt="Milford Sound – New Zealand" />
          <p>A stunning fjord with dramatic cliffs, waterfalls, and wildlife, often called the “eighth wonder of the world.”</p>
          <p>Amount: $2215</p>
          <button className="but" onClick={() => navigate('/form')}>Book Now</button>
        </div>

        <div className="box">
          <img src={BoraBora} alt="Bora Bora – French Polynesia" />
          <p>A tropical paradise in the South Pacific, famous for turquoise lagoons, overwater bungalows, and luxury resorts.</p>
          <p>Amount: $2715</p>
          <button className="but" onClick={() => navigate('/form')}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Australia;
