const StepBadge = ({ index, step, description }) => {
  return (
    <div className='flex gap-5 items-center'>
      <div
        className={`${
          step === index + 1 ? 'bg-light-blue' : 'border border-white text-white'
        } rounded-full w-10 h-10 flex justify-center items-center`}
      >
        {index + 1}
      </div>{' '}
      <div className='flex flex-col'>
        <p className='font-thin text-light-gray'>{`STEP ${index + 1}`}</p>
        <p className='font-bold text-white'>{description}</p>
      </div>
    </div>
  );
};

export default StepBadge;
