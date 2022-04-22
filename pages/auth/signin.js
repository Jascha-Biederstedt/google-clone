import React from 'react';
import { getProviders, signIn } from 'next-auth/react';

import Header from '../../components/Header';

export const getServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: { providers },
  };
};

const signin = ({ providers }) => {
  return (
    <>
      <Header />

      <div className="mt-40">
        {Object.values(providers).map(provider => (
          <div key={provider.name} className="flex flex-col items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
              alt="Google Logo"
              className="w-72 object-cover"
            />
            <p className="text-sm italic my-10 text-center">
              This website is created for learning purposes
            </p>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              className="bg-red-500 rounded-lg text-white p-3 hover:brightness-105"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default signin;
