import PlanCard from './Plan Card';
import ToggleSwitch from './Toggle Switch';

const SelectPlan = ({ decreaseStep, increaseStep, isMonthly, setIsMonthly }) => {
  return (
    <section className='font-ubuntu w-full h-full pt-20 px-30 flex flex-col items-start'>
      <h1 className='text-h1 font-extrabold'>Select your plan</h1>
      <p className='font-thin text-cool-gray'>
        You have the option of monthly or yearly billing.
      </p>
      <div className='my-10 flex w-full justify-center gap-10'>
        <PlanCard />
        <PlanCard />
        <PlanCard />
      </div>
      <div className='w-full flex justify-center items-center'>
        <ToggleSwitch isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
      </div>
      <div className='w-full flex justify-between items-center mt-40'>
        <button onClick={decreaseStep} className='text-cool-gray hover:font-bold'>Go Back</button>
        <button className='bg-marine-blue text-alabaster border-none rounded-lg px-5 py-3 w-auto'>
          Next Step
        </button>
      </div>
    </section>
  );
};

export default SelectPlan;
