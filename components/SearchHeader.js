import React, { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';

import User from './User';
import SearchHeaderOptions from './SearchHeaderOptions';

const SearchHeader = () => {
  const router = useRouter();
  const searchInputRef = useRef();

  const handleInputSearch = event => {
    event.preventDefault();

    const term = searchInputRef.current.value.trim();

    if (!term) {
      return;
    } else {
      router.push(`/search?term=${term}&searchType=`);
    }
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex justify-between items-center w-full p-6">
        <div className="flex items-center">
          <Link href="/">
            <a>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
                alt="Google Logo"
                className="w-28 object-cover"
              />
            </a>
          </Link>

          <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
            <input
              type="text"
              defaultValue={router.query.term}
              ref={searchInputRef}
              className="w-full focus:outline-none"
            />
            <XIcon
              onClick={() => (searchInputRef.current.value = '')}
              className="h-7 text-gray-500 cursor-pointer sm:mr-3"
            />
            <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
            <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500" />

            <button onClick={handleInputSearch} type="submit" hidden></button>
          </form>
        </div>

        <User />
      </div>

      <SearchHeaderOptions />
    </header>
  );
};

export default SearchHeader;
