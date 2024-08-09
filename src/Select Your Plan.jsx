import React from 'react';
import PlanCard from './Plan Card';
import ToggleSwitch from './Toggle Switch';

const SelectPlan = ({
  selectedPlan,
  setSelectedPlan,
  decreaseStep,
  increaseStep,
  isMonthly,
  setIsMonthly,
}) => {
  const plans = {
    0: {
      name: 'Arcade',
      monthlyPrice: 9,
      yearlyPrice: 90,
    },
    1: {
      name: 'Advanced',
      monthlyPrice: 12,
      yearlyPrice: 120,
    },
    2: {
      name: 'Pro',
      monthlyPrice: 15,
      yearlyPrice: 150,
    },
  };

  const handleClick = (index) => {
    setSelectedPlan(plans[index]);
  };

  return (
    <section className='font-ubuntu w-full h-full flex flex-col items-start justify-between'>
      <div className='w-full'>
        <h1 className='text-h1 font-extrabold'>Select your plan</h1>
        <p className='font-thin text-cool-gray'>
          You have the option of monthly or yearly billing.
        </p>
        <div className='my-10 flex w-full justify-between'>
          {[...Array(3).keys()].map((index) => (
            <PlanCard
              key={index}
              isSelected={selectedPlan?.name === plans[index].name}
              onClick={() => handleClick(index)}
              plan={plans[index].name}
              monthlyPrice={plans[index].monthlyPrice}
              yearlyPrice={plans[index].yearlyPrice}
              isMonthly={isMonthly}
            />
          ))}
        </div>
        <div className='w-full flex justify-center items-center'>
          <ToggleSwitch isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
        </div>
      </div>
      <div className='w-full flex justify-between items-center'>
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

export default SelectPlan;
