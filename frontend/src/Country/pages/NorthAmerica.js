import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/NorthAmerica.css';

const NorthAmerica = () => {
  const navigate = useNavigate();

  return (
    <div className="northamerica-container">
      <h1>NORTH AMERICA</h1>

      <div className="row">
        <div className="box">
          <img src={require('../Images/North America/GrandCanyon.jpg')} alt="Grand Canyon – USA" />
          <p>A vast canyon carved by the Colorado River in Arizona, offering breathtaking views, geological wonders, and hiking opportunities.</p>
          <p>Amount: $3115</p>
          <button onClick={() => navigate('/form')}>Book Now</button>
        </div>

        <div className="box">
          <img src={require('../Images/North America/Niagara.jpg')} alt="Niagara Falls – USA/Canada" />
          <p>A powerful trio of waterfalls on the US-Canada border, attracting millions of tourists for its natural beauty and boat tours like Maid of the Mist.</p>
          <p>Amount: $2999</p>
          <button onClick={() => navigate('/form')}>Book Now</button>
        </div>
      </div>

      <div className="row">
        <div className="box">
          <img src={require('../Images/North America/LibertyStatue.jpeg')} alt="Statue of Liberty – USA" />
          <p>A gift from France to the USA in 1886, this colossal statue stands in New York Harbor as a universal symbol of freedom and democracy.</p>
          <p>Amount: $3000</p>
          <button onClick={() => navigate('/form')}>Book Now</button>
        </div>

        <div className="box">
          <img src={require('../Images/North America/ChichenItza.jpg')} alt="Chichen Itza – Mexico" />
          <p>A UNESCO World Heritage site and once a major city of the Maya civilization, featuring the famous pyramid El Castillo with astronomical significance.</p>
          <p>Amount: $2950</p>
          <button onClick={() => navigate('/form')}>Book Now</button>
        </div>
      </div>

      <div className="row">
        <div className="box full-width">
          <img src={require('../Images/North America/Picsart_25-07-19_09-21-07-150.jpg')} alt="Times Square – USA" />
          <p>A vibrant hub in New York City known for its neon lights, Broadway theaters, and New Year’s Eve celebrations. It’s often called "The Crossroads of the World."</p>
          <p>Amount: $2862</p>
          <button onClick={() => navigate('/form')}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default NorthAmerica;
