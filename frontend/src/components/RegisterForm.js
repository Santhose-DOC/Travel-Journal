import React from 'react';
import '../assets/styles/RegisterForm.css';
import bannerImg from '../assets/Images/bg.jpeg';
import airImg from '../assets/Images/air.jpg';
import shipImg from '../assets/Images/ship.jpg';
import diveImg from '../assets/Images/div.jpg';

function RegisterForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("http://localhost:5000/api/form/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();
      alert(result.message);
      window.open('/payment.html', '_blank');
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Form submission failed");
    }
  };

  return (
    <div>
      <div className="top-section">
        <h1>TRIP BOOKING</h1>
        <p>Experience something new every moment</p>
        <img className="banner-image" src={bannerImg} alt="Banner" />

        <div className="image-row">
          <img src={airImg} alt="Air" />
          <img src={shipImg} alt="Ship" />
          <img src={diveImg} alt="Dive" />
        </div>
      </div>

      <div className="box">
        <h2>FORM</h2>
        <p>Book Your Favorite Place</p>
        <form onSubmit={handleSubmit}>
          <b>FIRSTNAME</b>
          <input type="text" name="firstname" placeholder="Enter your firstname" required />

          <b>LASTNAME</b>
          <input type="text" name="lastname" placeholder="Enter your lastname" required />

          <b>E-MAIL</b>
          <input type="email" name="email" placeholder="Enter your e-mail" required />

          <b>CHOOSE THE CLASS</b>
          <select name="travelClass" required>
            <option value="">Select class</option>
            <option>Economy</option>
            <option>Premium Economy</option>
            <option>Business</option>
            <option>First Class</option>
          </select>

          <b>NUMBER OF GUESTS</b>
          <input type="number" name="guests" placeholder="12" required />

          <b>ARRIVAL DATE</b>
          <input type="date" name="arrivalDate" required />

          <b>TIME</b>
          <input type="time" name="time" required />

          <b>DAYS OF TRAVEL</b>
          <input type="number" name="travelDays" placeholder="2" required />

          <b>DROP THE IMAGE OF THE PASSPORT</b>
          <input className="dappa" type="file" name="passportImage" />

          <b>CHOOSE THE PLACE</b>
          <select name="place" required>
            <option value="">Select place</option>
            <option>Asia</option>
            <option>Africa</option>
            <option>Australia</option>
            <option>Antarctica</option>
            <option>Europe</option>
            <option>North America</option>
            <option>South America</option>
          </select>

          <b>ANY SPECIAL REQUESTS OR MESSAGE</b>
          <input className="dappa" type="text" name="message" placeholder="Requests or message" />

          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
