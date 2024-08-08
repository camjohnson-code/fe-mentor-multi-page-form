const AddOnCard = ({ isChecked, onClick, addOn, description, price, isMonthly }) => {
  return (
    <div
      onClick={onClick}
      className={`hover:cursor-pointer border hover:border-purplish-blue transition ease-in-out duration-300 ${
        isChecked ? 'border-purplish-blue bg-alabaster' : 'border-light-gray'
      } rounded-md py-3 px-5 w-full flex items-center justify-between`}
    >
      <div className='flex gap-5'>
        <input
          type='checkbox'
          name='checkbox'
          id='checkbox'
          checked={isChecked}
        />
        <div>
          <p className='font-semibold text-marine-blue'>{addOn}</p>
          <p className='text-cool-gray font-light text-sm'>{description}</p>
        </div>
      </div>

      <p className='text-purplish-blue font-medium'>{`+$${price}/${isMonthly ? 'mo' : 'yr'}`}</p>
    </div>
  );
};

export default AddOnCard;
