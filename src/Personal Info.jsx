const PersonalInfo = ({
  name,
  setName,
  nameError,
  setNameError,
  email,
  setEmail,
  emailError,
  setEmailError,
  phone,
  setPhone,
  phoneError,
  setPhoneError,
  increaseStep,
}) => {
  return (
    <section className='font-ubuntu w-full h-100 pt-20 px-30'>
      <h1 className='text-h1 font-extrabold'>Personal info</h1>
      <p className='font-thin text-cool-gray'>
        Please provide your name, email address, and phone number.
      </p>
      <form className='flex flex-col my-10 gap-10'>
        <div className='flex flex-col'>
          {' '}
          <div className='flex w-100 justify-between'>
            <label htmlFor='name'>Name</label>
            <p
              className={`text-strawberry-red font-semibold ${
                nameError ? '' : 'hidden'
              }`}
            >
              This field is required
            </p>
          </div>
          <input
            className={`border ${
              nameError ? 'border-strawberry-red' : 'border-cool-gray'
            } rounded-md p-2`}
            placeholder='John Doe'
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <div className='flex w-100 justify-between'>
            <label htmlFor='email'>Email Address</label>
            <p
              className={`text-strawberry-red font-semibold ${
                emailError ? '' : 'hidden'
              }`}
            >
              This field is required
            </p>
          </div>
          <input
            className={`border ${
              emailError ? 'border-strawberry-red' : 'border-cool-gray'
            } rounded-md p-2`}
            placeholder='john@doe.com'
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          {' '}
          <div className='flex w-100 justify-between'>
            <label htmlFor='phone'>Phone Number</label>
            <p
              className={`text-strawberry-red font-semibold ${
                phoneError ? '' : 'hidden'
              }`}
            >
              This field is required
            </p>
          </div>
          <input
            className={`border ${
              phoneError ? 'border-strawberry-red' : 'border-cool-gray'
            } rounded-md p-2`}
            placeholder='e.g. +1 234 567 8901'
            type='tel'
            id='phone'
            name='phone'
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div className='flex justify-end'>
          <button
            className='mt-20 bg-marine-blue text-alabaster border-none rounded-lg px-5 py-3 w-auto'
            type='submit'
            onClick={(event) => {
              event.preventDefault();

              if (!name) setNameError(true);
              else setNameError(false);

              if (!email) setEmailError(true);
              else setEmailError(false);

              if (!phone) setPhoneError(true);
              else setPhoneError(false);

              if (phone && email && name) increaseStep(event);
            }}
          >
            Next Step
          </button>
        </div>
      </form>
    </section>
  );
};

export default PersonalInfo;
