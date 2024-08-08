import React, { useState } from 'react';

const ToggleSwitch = ({isMonthly, setIsMonthly}) => {

  const handleToggle = () => setIsMonthly(!isMonthly);

  return (
    <div className='flex items-center'>
      <span
        className={`mr-5 font-bold ${
          isMonthly ? 'text-marine-blue' : 'text-cool-gray'
        }`}
      >
        Monthly
      </span>
      <div
        className={`relative w-14 h-7 flex items-center bg-marine-blue rounded-full p-1 cursor-pointer duration-300 ease-in-out`}
        onClick={handleToggle}
      >
        <div
          className={`absolute left-1 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
            isMonthly ? 'translate-x-0' : 'translate-x-7'
          }`}
        ></div>
      </div>
      <span
        className={`ml-5 font-bold ${
          !isMonthly ? 'text-marine-blue' : 'text-cool-gray'
        }`}
      >
        Yearly
      </span>
    </div>
  );
};

export default ToggleSwitch;
