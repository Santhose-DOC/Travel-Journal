// src/Country/pages/SouthAmerica.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/SouthAmerica.css';
import christ from '../Images/South America/Christ the Redeemer.jpg';
import machu from '../Images/South America/Machu picchu.jpg';
import iguazu from '../Images/South America/Iguazu Falls.jpg';
import amazon from '../Images/South America/Amazon.jpg';
import salar from '../Images/South America/Sadar de Uyuni.jpg';

const SouthAmerica = () => {
  const navigate = useNavigate();

  return (
    <div className="south-america-container">
      <h1>SOUTH AMERICA</h1>

      <div className="row">
        <div className="box" onClick={() => {}}>
          <img src={christ} alt="Christ the Redeemer – Brazil" />
          <p>This iconic statue of Jesus Christ towers over Rio de Janeiro from Mount Corcovado, symbolizing peace and welcoming arms to visitors.</p>
          <p>Amount: $3335</p>
          <button onClick={() => navigate('/form')}>Book Now</button>
        </div>

        <div className="box" onClick={() => {}}>
          <img src={machu} alt="Machu Picchu – Peru" />
          <p>An ancient Incan city hidden in the Andes Mountains. It’s a mysterious archaeological marvel showcasing advanced engineering and spiritual significance.</p>
          <p>Amount: $3789</p>
          <button onClick={() => navigate('/form')}>Book Now</button>
        </div>

        <div className="box" onClick={() => {}}>
          <img src={iguazu} alt="Iguazu Falls – Argentina/Brazil" />
          <p>One of the largest and most stunning waterfall systems in the world, located on the border of Argentina and Brazil amidst lush jungle.</p>
          <p>Amount: $3250</p>
          <button onClick={() => navigate('/form')}>Book Now</button>
        </div>

        <div className="box" onClick={() => {}}>
          <img src={amazon} alt="Amazon Rainforest – Brazil & neighbors" />
          <p>The world's largest tropical rainforest, rich in biodiversity and vital for Earth’s climate, home to unique wildlife and indigenous cultures.</p>
          <p>Amount: $3750</p>
          <button onClick={() => navigate('/form')}>Book Now</button>
        </div>

        <div className="box" onClick={() => {}}>
          <img src={salar} alt="Salar de Uyuni – Bolivia" />
          <p>The world’s largest salt flat, creating a mirror effect during the rainy season and offering otherworldly views and natural wonder.</p>
          <p>Amount: $3105</p>
          <button onClick={() => navigate('/form')}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default SouthAmerica;
