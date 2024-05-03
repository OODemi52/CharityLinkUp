'use client';

import InputField from 'components/fields/InputField';
import Default from 'components/auth/variants/DefaultAuthLayout';
import Link from 'next/link';
import { SetStateAction, useState } from 'react';

function SignInDefault() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userDetails, setUserDetails] = useState({});

  const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if ( email && password ) {
      try {
        const user = { email, password };
        const response = await fetch('/api/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });

        if (response.ok) {
          const { accessToken } = await response.json();
          console.log('Sign in successful:', accessToken);
          localStorage.setItem('accessToken', accessToken);
          window.location.href = '/admin/default';
        } else {
          const error = await response.json();
          console.error('Error signing in:', error);
          alert('Error signing in! Please try again.');
        }
      } catch (error) {
        console.error('Error signing in:', error);
        alert('Error signing in! Please try again.');
      }
    }
  };

  return (
    <Default
      maincard={
        <div className="mb-16 mt-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
          <form
            onSubmit={handleSubmit} className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
            <h1 className="text-brandColor font-menlo font-black mr-auto hover:cursor-pointer"> <Link href="/"> Charity Link Up </Link> </h1>
            <h3 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
              Sign In
            </h3>
            <p className="mb-9 ml-1 text-base text-gray-600">
              Enter your email and password to sign in!
            </p>
            <div className="mb-6 flex items-center  gap-3">
            </div>
            <InputField
              variant="auth"
              extra="mb-3"
              label="Email"
              placeholder="Enter Email"
              id="email"
              type="email"
              onChange={handleEmailChange}
            />
            <InputField
              variant="auth"
              extra="mb-3"
              label="Password"
              placeholder="Enter Password"
              id="password"
              type="password"
              onChange={handlePasswordChange}
            />
            <div className="mb-4 flex items-center justify-between px-2">
              <div className="mt-2 flex items-center">
              </div>
            </div>
            <button className="linear w-full rounded-xl bg-brand-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
              Sign In
            </button>
            <div className="mt-4">
              <span className="text-sm font-medium text-navy-700 dark:text-gray-500">
                Not registered yet?
              </span>
              <a
                href="/auth/sign-up"
                className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
              >
                Create and account here!
              </a>
            </div>
          </form>
        </div>
      }
    />
  );
}

export default SignInDefault;
