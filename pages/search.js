import React from 'react';
import Head from 'next/head';

import SearchHeader from '../components/SearchHeader';
import dummyData from '../data/dummyData';

export const getServerSideProps = async context => {
  const isDev = true;
  const searchResults = isDev
    ? dummyData
    : await fetch(`https://www.googleapis.com/customsearch/v1?key=${
        process.env.GOOGLE_API_KEY
      }&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${context.query.term}${
        context.query.searchType && '&searchType=image'
      }
  `).then(res => res.json());

  return {
    props: {
      searchResults,
    },
  };
};

const search = ({ searchResults }) => {
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
