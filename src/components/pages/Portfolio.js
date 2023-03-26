import React from 'react';
//import '../../css/Portfolio.css';
import cardData from '../../utils/cardData.js';

export default function Portfolio() {
    return (
      <div>
        <h2>Portfolio</h2>
        <div>
          {cardData.map((card) => (
            <section>
                <h3>{card.title}</h3>
                <img src = {card.image} alt = "project image"/>
                <p>{card.description}</p>
                <a href= {card.app}>View deployed application</a>
                <a href = {card.repo}>View github repository</a>      
            </section>
          ))}
        </div>
      </div>
    );
  }
  