import React from 'react';
import '../Styles/Antarctica.css';
import ParadiseBay from '../Images/Antartica/Paradise Bay.jpg';
import LemaireChannel from '../Images/Antartica/Lemaire Channel.jpg';
import DeceptionIsland from '../Images/Antartica/Deception Island.jpg';
import SouthPole from '../Images/Antartica/South Pole.jpg';
import NekoHarbour from '../Images/Antartica/Neko Harbour.jpg';
import AntarticaBg from '../Images/antartic.jpg';
import { useNavigate } from 'react-router-dom';

const Antarctica = () => {
  const containerStyle = {
    backgroundImage: `url(${AntarticaBg})`,
    backgroundSize: 'cover',
    textAlign: 'center',
    fontFamily: 'sans-serif',
  };
  const navigate = useNavigate();

  return (
    <div className="continent-container" style={containerStyle}>
      <h1>ANTARCTICA</h1>

      <div className="row center-row">
        <div className="box">
          <img src={ParadiseBay} alt="Paradise Bay" />
          <p>
            One of the few places where tourists can land on the Antarctic continent,
            known for its spectacular scenery and calm waters.
          </p>
          <p>Amount: $2585</p>
          <button className="but" onClick={() => navigate('/form')}>Book Now</button>
        </div>

        <div className="box">
          <img src={LemaireChannel} alt="Lemaire Channel" />
          <p>
            A narrow, iceberg-filled passage with towering cliffs on either side,
            offering unforgettable views during cruises.
          </p>
          <p>Amount: $2915</p>
          <button className="but" onClick={() => navigate('/form')}>Book Now</button>
        </div>

        <div className="box">
          <img src={DeceptionIsland} alt="Deception Island" />
          <p>
            A volcanic island with a flooded caldera, it’s a unique destination with
            geothermal hot springs and research stations.
          </p>
          <p>Amount: $2658</p>
          <button className="but" onClick={() => navigate('/form')}>Book Now</button>
        </div>

        <div className="box">
          <img src={SouthPole} alt="South Pole Station" />
          <p>
            The Amundsen–Scott South Pole Station is a US research facility located
            at Earth’s southernmost point.
          </p>
          <p>Amount: $2885</p>
          <button className="but" onClick={() => navigate('/form')}>Book Now</button>
        </div>

        <div className="box">
          <img src={NekoHarbour} alt="Neko Harbour" />
          <p>
            A scenic landing site for Antarctic expeditions, offering close encounters
            with glaciers, penguins, and stunning ice formations.
          </p>
          <p>Amount: $2500</p>
          <button className="but" onClick={() => navigate('/form')}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Antarctica;
