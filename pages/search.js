import React from 'react';
import Head from 'next/head';

import SearchHeader from '../components/SearchHeader';

const search = () => {
  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>

      <SearchHeader />
    </div>
  );
};

export default search;
