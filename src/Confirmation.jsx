import React from 'react';

const Confirmation = () => {
  return (
    <section className='font-ubuntu w-full h-full flex flex-col justify-center items-center'>
      <img src="../../assets/images/icon-thank-you.svg" alt="Checkmark icon" />
      <h1 className='text-marine-blue font-bold text-2xl my-5'>Thank you!</h1>
      <p className='text-cool-gray text-center w-3/5'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, feel free to email us at support@loregaming.com.</p>
    </section>
  );
};

export default Confirmation;
