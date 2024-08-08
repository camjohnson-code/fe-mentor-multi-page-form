import React, { useState } from 'react';
import AddOnCard from './Add On Card';

const AddOns = ({ decreaseStep, increaseStep, isMonthly, selectedAddOn, setSelectedAddOn }) => {
  const description = {
    0: {
        name: 'Online service',
        description: 'Access to multiplayer games',
        monthlyPrice: 1,
        yearlyPrice: 10
    },
    1: {
        name: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        monthlyPrice: 2,
        yearlyPrice: 20
    },
    2: {
        name: 'Customizable Profile',
        description: 'Custom theme on your profile',
        monthlyPrice: 2,
        yearlyPrice: 20
    }
  }

  const handleClick = (index) => {
    const hasIndex = selectedAddOn.some((num) => num === index);

    if (hasIndex) setSelectedAddOn(selectedAddOn.filter((num) => num !== index));
    else setSelectedAddOn([...selectedAddOn, index]);
  };

  return (
    <section className='font-ubuntu w-3/5 h-100 pt-20 px-30 flex flex-col items-start'>
      <h1 className='text-h1 font-extrabold'>Pick add-ons</h1>
      <p className='font-thin text-cool-gray'>
        Add-ons help enhance your gaming experience.
      </p>
      <div className='my-10 flex flex-col w-full justify-between h-1/2'>
        {[...Array(3).keys()].map((index) => (
          <AddOnCard
            key={index}
            isMonthly={isMonthly}
            isChecked={selectedAddOn.includes(index)}
            onClick={() => handleClick(index)}
            addOn={description[index].name}
            description={description[index].description}
            price={isMonthly ? description[index].monthlyPrice : description[index].yearlyPrice}
          />
        ))}
      </div>
      <div className='w-full flex justify-between items-center mt-40'>
        <button
          onClick={decreaseStep}
          className='text-cool-gray hover:font-bold'
        >
          Go Back
        </button>
        <button
          onClick={increaseStep}
          className='bg-marine-blue text-alabaster border-none rounded-lg px-5 py-3 w-auto'
        >
          Next Step
        </button>
      </div>
    </section>
  );
};

export default AddOns;
