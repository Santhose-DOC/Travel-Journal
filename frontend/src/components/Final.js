import React from 'react';
import '../assets/styles/Final.css';
import asiaImg from '../assets/Images/asia1.jpg';
import africaImg from '../assets/Images/africa1.jpg';
import europeImg from '../assets/Images/europ.jpg';
import northImg from '../assets/Images/northamerica.jpg';
import southImg from '../assets/Images/southamerica.jpg';
import australiaImg from '../assets/Images/australia1.jpg';
import antarcticaImg from '../assets/Images/antartic.jpg';
import { useNavigate } from 'react-router-dom';

const Final = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const places = [
    {
      image: asiaImg,
      title: "Asia",
      desc: "Asia is the largest continent both in size and population. It boasts ancient civilizations, towering mountains, and futuristic cities. From the temples of India to the skyscrapers of Japan, Asia blends tradition with innovation.",
      path: "/asia"
    },
    {
      image: africaImg,
      title: "Africa",
      desc: "Africa is rich in cultural diversity and natural beauty, home to vast deserts, jungles, and majestic wildlife. From the Sahara to the Serengeti, it’s a continent of contrasts and wonders.",
      path: "/africa"
    },
    {
      image: europeImg,
      title: "Europe",
      desc: "Europe is known for historical landmarks, art, and architecture. From the Eiffel Tower to the Alps, it blends old-world charm with modern marvels.",
      path: "/europe"
    },
    {
      image: northImg,
      title: "North America",
      desc: "North America features tropical beaches, snowy mountains, cities like New York and Toronto, and natural wonders like the Grand Canyon.",
      path: "/north"
    },
    {
      image: southImg,
      title: "South America",
      desc: "South America boasts the Amazon rainforest, Andes mountains, and ancient sites like Machu Picchu — a land of mystery and beauty.",
      path: "/south"
    },
    {
      image: australiaImg,
      title: "Australia",
      desc: "Australia and Oceania offer stunning landscapes, the Great Barrier Reef, and unique wildlife. A paradise for nature lovers.",
      path: "/australia"
    },
    {
      image: antarcticaImg,
      title: "Antarctica",
      desc: "Antarctica is the coldest, driest, and windiest continent. A haven for science and polar wildlife like penguins and seals.",
      path: "/antartica"
    }
  ];

  return (
    <div className="final-container">
      <header>
        <h1>CHOOSE THE PLACES</h1>
      </header>
      <div className="gallery">
        {places.map((place, index) => (
          <div className="gallery-item" key={index} onClick={() => handleNavigation(place.path)}>
            <img src={place.image} alt={place.title} />
            <p>{place.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Final;
