// src/components/Home.js
import React from 'react';
import '../assets/styles/Home.css';
import logo from '../assets/Images/logo.jpg';
import backgroundImg from '../assets/Images/Background.jpg';
import koomapattiImg from '../assets/Images/koomapatti.png';
import peruImg from '../assets/Images/Peru.jpg';
import libertyImg from '../assets/Images/LibertyStatue.jpeg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Home() {
  return (
    <div>
      {/* Header Section */}
      <section className="header" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <nav>
          <a href="/">
            <img src={logo} alt="Logo" width="100px" />
          </a>
          <div className="nav-links">
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="#footer">ABOUT</a></li>
              <li><a href="/trips">TRIPS</a></li>
              <li><a href="#footer">CONTACT</a></li>
            </ul>
          </div>
        </nav>
        <div className="text-box">
          <h1><b>Explore</b></h1>
          <p>The world is waiting. Where will you go next?<br />
            — Sign in to unlock your journey.
          </p>
          <a href="/register" className="hero-btn">Visit us to know more</a>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="course">
        <h1>Why Choose Us?</h1>
        <p>At our travel booking platform, we believe travel is more than just a destination — it's a feeling, a story, and a personal transformation. That’s why we go beyond just offering bookings. We deliver experiences crafted with care, trust, and a passion for discovery. Whether you're chasing sunsets, exploring ancient cities, or simply escaping the routine, we’re here to make your journey seamless, affordable, and unforgettable. With handpicked packages, transparent pricing, 24/7 support, and a platform built for ease, we ensure your only job is to enjoy the adventure. Choose us, because your travel dreams deserve more than just a website — they deserve a partner who understands why you travel in the first place..</p>
        <div className="row">
          <div className="course-col">
            <h3>Effortless Exploration</h3>
            <p>Planning a trip should be exciting, not exhausting. Our tour booking platform simplifies every step — from browsing top destinations to customizing itineraries. With just a few clicks, you can unlock unforgettable experiences, secure trusted guides, and access handpicked packages. Whether it’s a weekend getaway or a global adventure, everything is tailored to your pace and preferences. Travel easy, travel smart — the world is just a tap away.</p>
          </div>
          <div className="course-col">
            <h3>Curated Adventures</h3>
            <p>We don’t just book tours — we design journeys. Each package is thoughtfully created to showcase the heart of every destination. From local culture and cuisine to hidden gems and must-see sights, our tours go beyond the ordinary. Expert guides, immersive experiences, and flexible plans ensure that every trip is meaningful. Whether you crave thrill, relaxation, or discovery — your perfect itinerary begins here.</p>
          </div>
          <div className="course-col">
            <h3>Trust, Safety & Memories</h3>
            <p>Your journey matters to us. That’s why we partner only with trusted tour operators, provide transparent reviews, and offer 24/7 customer support. With secure bookings, verified travel experiences, and a passion for making your trip unforgettable, we ensure every moment is worry-free. Join thousands of happy travelers who’ve turned moments into memories — because your adventure deserves nothing less.</p>
          </div>
        </div>
      </section>

      {/* Top Booked Places Section */}
      <section className="store">
        <h1>Top Booked places</h1>
        <div className="row">
          <div className="store-col">
            <img src={koomapattiImg} alt="Koomapatti" />
            <div className="layer">
              <h3>Koomapetti</h3>
            </div>
          </div>
          <div className="store-col">
            <img src={peruImg} alt="Peru" />
            <div className="layer">
              <h3>Peru</h3>
            </div>
          </div>
          <div className="store-col">
            <img src={libertyImg} alt="New York" />
            <div className="layer">
              <h3>New York</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="footer">
        <div className="footer-section about">
          <h3>About US</h3>
          <p>We are a passionate team of travel enthusiasts dedicated to making your journeys easy, inspiring, and unforgettable. From weekend getaways to global adventures, we offer seamless booking for flights, hotels, and tours — all with a focus on trust, personalization, and simplicity. With us, travel isn’t just planned — it’s experiencednpm</p>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>123 Main Street, Chennai, India</p>
          <p>Phone: +91 90750 05279</p>
          <p>Email: deliciousbite@gmail.com</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/reservation">Reservation</a></li>
          </ul>
        </div>

        <div className="footer-section social">
            <h3>Follow Us</h3>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i> Twitter
            </a>
        </div>


        <div className="footer-bottom">
          <p>&copy; 2025 SKYLUXE. All rights reserved. | <a href="/">Privacy Policy</a></p>
        </div>
      </footer>
    </div>
  );
}

export default Home;