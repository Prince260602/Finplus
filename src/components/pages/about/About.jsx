import React from 'react';
import ParticlesBackground from '../../ParticlesBackground';
import './About.css';
import { Link } from "react-router-dom";


function About() {
  return (
    <>
      <ParticlesBackground />
      <div className="Aboutmain">
        <p className="main">
        Finplus empowers breakaway advisors with cutting-edge tools and technology to enhance client experiences, cut expenses, and boost efficiency.
        </p>
        <div className='fancy'>
        <Link to="/contact">
          <button >Get Early Access</button>
        </Link>
        </div>
      </div>
      
      <div className="Aboutsec1">
        <div className="section">
          <img src="https://framerusercontent.com/images/e3su3U1wSsGAGYabhSIEypdFo70.png" alt="What Icon" className="icon" />
          <div className="text">
            <h2>What</h2>
            <p>Finplus creates advanced tech solutions to empower advisors in building strong client connections and engaging prospects.</p>
          </div>
        </div>
        <div className="section">
          <img src="https://framerusercontent.com/images/HJYzlDgjB9zYJpiJ75mcsCR2nc.png" alt="Why Icon" className="icon" />
          <div className="text">
            <h2>Why</h2>
            <p>Modern investors seek tech-driven financial advice. If you can’t provide it, they’ll turn elsewhere. Are you ready to adapt?</p>
          </div>
        </div>
        <div className="section">
          <img src="https://framerusercontent.com/images/6w9odXRh8VetvcUp6ei0Wi1r8k.png" alt="How Icon" className="icon" />
          <div className="text">
            <h2>How</h2>
            <p>
            Our team of engineers and designers creates cutting-edge tools to empower your firm and attract the next generation of investors.</p>
          </div>
        </div>
      </div>
      
      <div className="Aboutsec2">
        <div className="heading">
          <h1>Why Finplus?</h1>
        </div>
        <div className="features">
          <div className="feature">
            <img src="https://framerusercontent.com/images/EiWMM25GZgK1tQwiTR5sw0iLY.png" alt="Built-in Accuracy Icon" className="feature-icon" />
            <p>
              <h2>Built-in Accuracy</h2>
              Finplus meeting notes module, driven by a multimodal engine, ensures accuracy without edits or review.
            </p>
          </div>
          <div className="feature">
            <img src="https://framerusercontent.com/images/ZJWOHhn8MKSsNYZ8vYd4qFGxpE.png" alt="Data is Safe Icon" className="feature-icon" />
            <p>
              <h2>Data is Safe</h2>
              Protecting your data and client information is our priority with our secure, SOC2-compliant platform.
            </p>
          </div>
          <div className="feature">
            <img src="https://framerusercontent.com/images/N0Tn4Zu2k278BWmSkx1N36fktY.png" alt="Design First UX Icon" className="feature-icon" />
            <p>
              <h2>Design First UX</h2>
              Operating in a traditional industry? We create design-focused products tailored for your future clients.
            </p>
          </div>
        </div>
      </div>
      
      <div className="Aboutsec3">
        <div className="content-box">
          <h1>Explore the future of AI-powered back office</h1>
          <p>Transform client relationships using Finplus advanced machine learning and data science capabilities!</p>
          <div className='fancy1'>
          <Link to="/Contact">
            <button >Contact us</button>
          </Link>
          </div>
        </div>
      </div>
      
      <div className="Aboutsec4">
        <div className="values">
          <h3>Our values</h3>
          <p>Our goal is to empower advisors to be efficient, precise, productive, and client-focused for maximum impact.</p>
          <p>Enhance client experiences with Finplus while streamlining and upgrading your back-office operations.</p>
       
        </div>
        <div className="footer-text">
  
        </div>
      </div>
    </>
  );
}

export default About;
