import React from 'react'
import Header,{Component2} from '../components/Header'
import parlePlazaImage from '../assets/parlePlazaImage.png';

function Homepage() {
  return (
<div>
  <Header />
 <div className="app-container">
      <div className="content-box">
        <h1>Linguistic Bridge at Parle Plaza</h1>
        <p className="description">
        At Parle Plaza, we celebrate the diversity of languages and cultures that intersect daily. 
          Our platform serves as a digital meeting point where language barriers dissolve, 
          allowing people from different origins to connect, share, and understand each other.
        </p>

        <p className="secondary-text">
        We break down barriers and build connections, creating a space where people from diverse cultures can communicate, learn, and grow together.
        </p> 

        <img
         src={parlePlazaImage}
         alt="Greeting-expressions"
         className="feature-Image"
         />
          <Component2 />
          <p className="closing-text">
        Join Us! Together, we're building 
        bridges of understanding across all linguistic boundaries. 
        </p>  
      </div>
  </div>
</div>  
  );
}

export default Homepage