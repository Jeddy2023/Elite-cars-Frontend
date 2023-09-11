import React from 'react';
import '../styles/Suvcars.css'
import SuvData from '../carsData/Suvdata';
import Suv from '../components/Suv';



const Suvcars = () => {
    return (
       <div className='Suvcontainer'>

        <div className='S-top'>
            <h1>Fleet Standard</h1>
        </div>

        <div className='S-body'>
            <div className='S-bodytop'>
                <h1>Browse Your Suv's</h1>
                <span>fuck me</span>
                <span>fuck me</span>
                <span>fuck me</span>
            </div>

            <div className='S-carsd'>
            {SuvData.map((car) => (
            <Suv
              key={car.id}
              image={car.image}
              name={car.name}
              description={car.description}
            />
          ))}

            </div>


        </div>
       </div>
    );
};

export default Suvcars;