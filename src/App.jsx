import { useState } from 'react';
import PersonalInfo from './Personal Info';
import SelectPlan from './Select Your Plan';
import AddOns from './Add Ons';
import FinishingUp from './Finishing Up';
import StepBadge from './Step Badge';

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

  const stepInfo = {
    1: {
      step: 1,
      description: 'YOUR INFO',
    },
    2: {
      step: 2,
      description: 'SELECT PLAN',
    },
    3: {
      step: 3,
      description: 'ADD-ONS',
    },
    4: {
      step: 4,
      description: 'SUMMARY',
    },
  };

  const stepComponents = {
    1: () => (
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
    ),
    2: () => (
      <SelectPlan
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        isMonthly={isMonthly}
        setIsMonthly={setIsMonthly}
        decreaseStep={decreaseStep}
        increaseStep={increaseStep}
      />
    ),
    3: () => (
      <AddOns
        selectedAddOn={selectedAddOn}
        setSelectedAddOn={setSelectedAddOn}
        isMonthly={isMonthly}
        decreaseStep={decreaseStep}
        increaseStep={increaseStep}
      />
    ),
    4: () => (
      <FinishingUp
        setStep={setStep}
        selectedPlan={selectedPlan}
        selectedAddOn={selectedAddOn}
        isMonthly={isMonthly}
        decreaseStep={decreaseStep}
        increaseStep={increaseStep}
      />
    ),
  };

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
        {[...Array(4).keys()].map((index) => (
          <StepBadge
            key={index}
            index={index}
            step={step}
            description={stepInfo[index + 1].description}
          />
        ))}
      </aside>
      <section className='h-100 w-full px-20 py-10'>
        {stepComponents[step] ? stepComponents[step]() : ''}
      </section>
    </main>
  );
}

export default App;
