import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Europe.css';

import eiffel from '../Images/Europe/EfilTower.jpg';
import versailles from '../Images/Europe/PalaceofVersailles.jpeg';
import madrid from '../Images/Europe/europe palace.jpg';
import santorini from '../Images/Europe/Santorini.jpg';
import switzerland from '../Images/Europe/Switzerland.jpg';

const Europe = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/form');
  };

  return (
    <div className="europe-container">
      <h1>EUROPE</h1>
      <div className="row">
        <div className="box">
          <img src={eiffel} alt="Eiffel Tower – France" />
          <p>A world-famous iron tower in Paris, built in 1889. It offers stunning views of the city and is a symbol of French art and culture.</p>
          <p>Amount: $2115</p>
          <button onClick={handleBookNow}>Book Now</button>
        </div>

        <div className="box">
          <img src={versailles} alt="Palace of Versailles – France" />
          <p>A magnificent royal residence outside Paris, known for its grand architecture, Hall of Mirrors, and beautiful gardens reflecting royal luxury.</p>
          <p>Amount: $2815</p>
          <button onClick={handleBookNow}>Book Now</button>
        </div>

        <div className="box">
          <img src={madrid} alt="Royal Palace of Madrid – Spain" />
          <p>The official residence of the Spanish royal family (used for ceremonies), featuring impressive halls, historic artwork, and baroque design.</p>
          <p>Amount: $23645</p>
          <button onClick={handleBookNow}>Book Now</button>
        </div>

        <div className="box">
          <img src={santorini} alt="Santorini – Greece" />
          <p>A picturesque island in the Aegean Sea, known for its whitewashed houses, blue-domed churches, volcanic cliffs, and famous sunsets.</p>
          <p>Amount: $2500</p>
          <button onClick={handleBookNow}>Book Now</button>
        </div>

        <div className="box">
          <img src={switzerland} alt="Switzerland (Alps)" />
          <p>A scenic country known for the Swiss Alps—perfect for skiing, hiking, and exploring peaceful mountain villages and clear lakes.</p>
          <p>Amount: $2865</p>
          <button onClick={handleBookNow}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Europe;
