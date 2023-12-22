import React, { useState } from 'react';
import Typography from '../components/shared/Typography/Typography';
import FillButton from '../components/shared/Buttons/FillButton';

const Login = () => {
  // states ----------->

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const updateLoginData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // states ends here --------->

  // methods starts here ----------->

  const handleLoginHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className='w-full min-h-screen flex flex-col gap-6 justify-center items-center'>
      {/* logo ---------->  */}
      <p className='text-[35px] font-extrabold font-poppins'>
        <span className='text-success-main'>On</span>
        <span className='text-black-main'>Lane</span>
      </p>
      {/* login ----->  */}
      <form
        onSubmit={handleLoginHandler}
        className='max-w-[420px] py-10 px-16 w-full flex flex-col cardShadow bg-white-main rounded-[16px] justify-center items-start'
      >
        <Typography.H1>
          <span className='font-roboto'>Welcome back</span>
        </Typography.H1>
        <Typography.MediumText styles='text-black-light'>
          Enter your account details
        </Typography.MediumText>
        {/* inputs --------->  */}
        {/* 1) email  */}
        <div className='w-full flex flex-col gap-2 mt-9'>
          <label
            htmlFor='email'
            className='text-[20px] text-black-main font-smRoboto font-medium'
          >
            Email
          </label>
          <input
            onChange={(e) => updateLoginData(e)}
            type='email'
            id='email'
            name='email'
            placeholder='example@email.com'
            className='w-full h-[40px] rounded-[15px] text-[20px] font-smRoboto font-normal px-3 focus:outline-none border-[1px] border-black-main'
          />
        </div>
        {/* 2) password  */}
        <div className='w-full flex flex-col gap-2 mt-5'>
          <label
            htmlFor='password'
            className='text-[20px] text-black-main font-smRoboto font-medium'
          >
            Password
          </label>
          <input
            onChange={(e) => updateLoginData(e)}
            type='password'
            id='password'
            name='password'
            placeholder='****************'
            className='w-full h-[40px] rounded-[15px] leading-0 text-[20px] font-smRoboto font-normal px-3 focus:outline-none border-[1px] border-black-main'
          />
        </div>
        {/* login button ----> */}
        <FillButton
          event={(e) => handleLoginHandler(e)}
          styles='w-full h-[45px] bg-success-main font-smRoboto mt-9'
        >
          Sign In
        </FillButton>
      </form>
    </div>
  );
};

export default Login;
