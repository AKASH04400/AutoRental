import React, { useState } from 'react'
import { assets } from '../assets/assets';
import { cityList } from '../assets/assets';
// import super_car from '../assets/super_car.png';

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState('');

  return (
<div className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>
<h1 className='text-4xl md:text-5xl font-semibold'>Auto's For Hiring</h1>
      <form className="flex flex-col md:flex-row items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-4xl bg-white shadow-lg gap-6">
  <div className="flex flex-col md:flex-row items-center gap-6 w-full">
    <div className="w-full md:w-auto">
      <select required value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)}
        className="block w-full md:w-60 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
      >
        <option value="">Select a city</option>
        {cityList.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <p className="mt-1 text-sm text-gray-500">{pickupLocation ? pickupLocation : 'Please select Location'}</p>
    </div>
  </div>
</form>

      {/* Centered Image */}
      <img src={assets.main_car} alt='car' className='max-h-85'/>
    </div>
  );
}

export default Hero;
