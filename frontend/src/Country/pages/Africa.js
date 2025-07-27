import React from 'react';
import '../Styles/Africa.css';
import egyptImg from '../Images/Africa/Eypt.jpg';
import tanzaniaImg from '../Images/Africa/Tanzania.jpg';
import tableMountainImg from '../Images/Africa/TableMountain.jpg';
import victoriaImg from '../Images/Africa/Victoria.jpg';
import saharaImg from '../Images/Africa/Sahara.jpg';
import { useNavigate } from 'react-router-dom';


const Africa = () => {
  const navigate = useNavigate();


  return (
    <div className="africa-container">
      <h1>AFRICA</h1>

      <div className="row">
        <div className="box">
          <img src={egyptImg} alt="Pyramids of Giza – Egypt" />
          <p>Ancient wonders built as tombs for the pharaohs.</p>
          <p>Amount: $2000</p>
          <button className="but" onClick={() => navigate('/form')}>Book Now</button>
        </div>

        <div className="box">
          <img src={tanzaniaImg} alt="Serengeti National Park – Tanzania" />
          <p>A wildlife haven famous for the Great Migration of wildebeest and zebras.</p>
          <p>Amount: $2005</p>
          <button className="but" onClick={() => navigate('/form')}>Book Now</button>
        </div>
      </div>

      <div className="row">
        <div className="box">
          <img src={tableMountainImg} alt="Table Mountain – South Africa" />
          <p>A flat-topped mountain offering panoramic views of Cape Town.</p>
          <p>Amount: $1985</p>
          <button className="but" onClick={() => navigate('/form')}>Book Now</button>
        </div>

        <div className="box">
          <img src={victoriaImg} alt="Victoria Falls – Zambia/Zimbabwe" />
          <p>One of the largest and most spectacular waterfalls in the world.</p>
          <p>Amount: $1875</p>
          <button className="but" onClick={() => navigate('/form')}>Book Now</button>
        </div>
      </div>

      <div className="center-row">
        <div className="box full-width">
          <img src={saharaImg} alt="Sahara Desert – North Africa" />
          <p>The world’s largest hot desert with vast dunes and unique nomadic cultures.</p>
          <p>Amount: $1975</p>
          <button className="but" onClick={() => navigate('/form')}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Africa;
