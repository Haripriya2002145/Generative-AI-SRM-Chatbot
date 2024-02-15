import React from 'react';
import Student from "../images/College Student.png";
import "./Hero.css";

function Hero() {
    
    return (
        <div className='hero-container'>
            <div className='text'>
                <h2>Experience the best of placements with academic excellence</h2>
                <h1 className='srm'>SRM IST</h1>
                <h1 className='srm'>Ramapuram</h1>
                <p>Ranked #1 University in India, SRM IST, Ramapuram is a place for learning, discovery, innovation, expression, and discourse.</p>
                <button className='btn-explore'><a className='a-tag' href="https://srmrmp.edu.in/about-srm/srm-in-focus/">EXPLORE SRM IST RAMAPURAM</a></button>
            </div>
            <div className='pic-container'>
                <img className='pic' src={Student} alt="College Student"></img>
            </div>
        </div>
    )
}

export default Hero;