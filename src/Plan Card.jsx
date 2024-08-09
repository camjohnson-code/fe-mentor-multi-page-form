const PlanCard = ({ isSelected, onClick, plan, monthlyPrice, yearlyPrice, isMonthly }) => {
  return (
    <div className='flex justify-end'>
      <div
        className={`flex flex-col justify-between rounded-md items-left py-5 pl-5 pr-20 gap-10 border ${isSelected ? 'border-purplish-blue bg-alabaster' : 'border-light-gray'} hover:border-purplish-blue hover:cursor-pointer transition duration-300 ease-in-out`}
        onClick={onClick}
        style={{ width: '200px', height: '200px', overflow: 'hidden' }}
      >
        <img
          src={`../../assets/images/icon-${plan.toLowerCase()}.svg`}
          alt={`Icon for ${plan} plan`}
          className="m-0"
          style={{ maxWidth: '50%', maxHeight: '75px', objectFit: 'contain' }}
        />
        <div className='flex flex-col gap-2'>
          <p className='font-bold text-marine-blue' style={{ fontSize: '1rem' }}>{plan}</p>
          <p className='font-light text-sm text-cool-gray'>{`$${isMonthly ? monthlyPrice : yearlyPrice}/${isMonthly ? 'mo' : 'yr'}`}</p>
          <p className={`text-marine-blue font-light ${isMonthly ? 'hidden' : ''}`}>2 months free</p>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;