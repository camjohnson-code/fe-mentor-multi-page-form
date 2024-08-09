import React from 'react';

const FinishingUp = ({
  setStep,
  selectedPlan,
  selectedAddOn,
  isMonthly,
  increaseStep,
  decreaseStep,
}) => {
  const totalPrice =
    (isMonthly ? selectedPlan.monthlyPrice : selectedPlan.yearlyPrice) +
    selectedAddOn.reduce((acc, plan) => {
      if (isMonthly) acc += plan.monthlyPrice;
      else acc += plan.yearlyPrice;

      return acc;
    }, 0);

  return (
    <section className='font-ubuntu w-full h-full flex flex-col justify-between items-start'>
      <div className='w-full'>
        <h1 className='text-h1 font-extrabold'>Finishing up</h1>
        <p className='font-thin text-cool-gray'>
          Double-check everything looks OK before confirming.
        </p>
        <section className='w-full'>
          <div className='bg-alabaster p-5 rounded-md w-100 mt-10'>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col items-start'>
                <p className='text-marine-blue font-bold'>{`${
                  selectedPlan.name
                } (${isMonthly ? 'Monthly' : 'Yearly'})`}</p>
                <button
                  onClick={() => setStep(2)}
                  className='text-cool-gray font-light text-sm hover:underline hover:cursor-pointer'
                >
                  Change
                </button>
              </div>
              <p className='font-bold text-marine-blue'>{`$${
                isMonthly ? selectedPlan.monthlyPrice : selectedPlan.yearlyPrice
              }/${isMonthly ? 'mo' : 'yr'}`}</p>
            </div>
            <hr className='my-5' />
            {selectedAddOn.map((addOn) => {
              return (
                <div className='flex justify-between w-100 mb-5'>
                  <p className='text-cool-gray'>{addOn.name}</p>
                  <p className='text-marine-blue'>{`+$${
                    isMonthly ? addOn.monthlyPrice : addOn.yearlyPrice
                  }/${isMonthly ? 'mo' : 'yr'}`}</p>
                </div>
              );
            })}
          </div>
          <div className='flex justify-between w-100 my-10 px-5'>
            <p className='text-cool-gray'>{`Total (per ${
              isMonthly ? 'month' : 'year'
            })`}</p>
            <p className='font-semibold text-purplish-blue text-lg'>{`$${totalPrice}/${
              isMonthly ? 'mo' : 'yr'
            }`}</p>
          </div>
        </section>
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
          className='bg-purplish-blue text-alabaster border-none rounded-lg px-5 py-3 w-auto'
        >
          Confirm
        </button>
      </div>
    </section>
  );
};

export default FinishingUp;
