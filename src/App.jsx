import { useState } from 'react';
import PersonalInfo from './Personal Info';
import SelectPlan from './Select Your Plan';
import AddOns from './Add Ons';

function App() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [step, setStep] = useState(1);
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedAddOn, setSelectedAddOn] = useState([]);

  const increaseStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const decreaseStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <main className='flex flex-row w-full min-h-screen p-10 m-0'>
      <aside
        style={{
          backgroundImage: `url('../../assets/images/bg-sidebar-desktop.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'left bottom',
        }}
        className='w-1/3 rounded-xl px-20 py-20 flex flex-col gap-5'
      >
        <div className='flex gap-5 items-center'>
          <div
            className={`${
              step === 1 ? 'bg-light-blue' : 'border border-white text-white'
            } rounded-full w-10 h-10 flex justify-center items-center`}
          >
            1
          </div>{' '}
          <div className='flex flex-col'>
            <p className='font-thin text-light-gray'>STEP 1</p>
            <p className='font-bold text-white'>YOUR INFO</p>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <div
            className={`${
              step === 2 ? 'bg-light-blue' : 'border border-white text-white'
            } rounded-full w-10 h-10 flex justify-center items-center`}
          >
            2
          </div>{' '}
          <div className='flex flex-col'>
            <p className='font-thin text-light-gray'>STEP 2</p>
            <p className='font-bold text-white'>SELECT PLAN</p>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <div
            className={`${
              step === 3 ? 'bg-light-blue' : 'border border-white text-white'
            } rounded-full w-10 h-10 flex justify-center items-center`}
          >
            3
          </div>{' '}
          <div className='flex flex-col'>
            <p className='font-thin text-light-gray'>STEP 3</p>
            <p className='font-bold text-white'>ADD-ONS</p>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <div
            className={`${
              step === 4 ? 'bg-light-blue' : 'border border-white text-white'
            } rounded-full w-10 h-10 flex justify-center items-center`}
          >
            4
          </div>{' '}
          <div className='flex flex-col'>
            <p className='font-thin text-light-gray'>STEP 4</p>
            <p className='font-bold text-white'>SUMMARY</p>
          </div>
        </div>
      </aside>
      {step === 1 ? (
        <PersonalInfo
          name={name}
          setName={setName}
          nameError={nameError}
          setNameError={setNameError}
          email={email}
          setEmail={setEmail}
          emailError={emailError}
          setEmailError={setEmailError}
          phone={phone}
          setPhone={setPhone}
          phoneError={phoneError}
          setPhoneError={setPhoneError}
          increaseStep={increaseStep}
        />
      ) : (
        ''
      )}
      {step === 2 ? (
        <SelectPlan selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} isMonthly={isMonthly} setIsMonthly={setIsMonthly} decreaseStep={decreaseStep} increaseStep={increaseStep} />
      ) : (
        ''
      )}
      {step === 3 ? (
        <AddOns selectedAddOn={selectedAddOn} setSelectedAddOn={setSelectedAddOn} isMonthly={isMonthly} decreaseStep={decreaseStep} increaseStep={increaseStep} />
      ) : (
        ''
      )}
    </main>
  );
}

export default App;
