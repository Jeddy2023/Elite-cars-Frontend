import React from 'react';
import '../styles/suv.css'


const Suv = ({ image, name, description }) => {
    return (
        <div className="car-listing">
            <img className='Suv-img' src={image} alt={name} />
            <h2 id='Name'>{name}</h2>
            <p id='dis'>{description}</p>
            <button  id='btn'>View more</button>
        </div>
    );
};

export default Suv;