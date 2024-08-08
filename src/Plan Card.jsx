const PlanCard = () => {
  return (
    <div className='flex justify-end'>
      <div className='inline-flex flex-col justify-between rounded-md items-left py-5 pl-5 pr-20 gap-10 border border-light-gray hover:border-purplish-blue hover:cursor-pointer transition duration-300 ease-in-out'>
        <img
          src='../../assets/images/icon-arcade.svg'
          alt='Icon for Arcade plan'
        />
        <div className='flex flex-col gap-2'>
          <p className='font-bold text-marine-blue'>Arcade</p>
          <p className='font-light text-sm text-cool-gray'>$9/mo</p>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
