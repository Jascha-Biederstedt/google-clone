import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import SearchHeader from '../components/SearchHeader';
import ImageResults from '../components/ImageResults';
import SearchResults from '../components/SearchResults';
import dummyData from '../data/dummyData';

export const getServerSideProps = async context => {
  const startIndex = context.query.start || '1';
  const isDev = false;
  const searchResults = isDev
    ? dummyData
    : await fetch(`https://www.googleapis.com/customsearch/v1?key=${
        process.env.GOOGLE_API_KEY
      }&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${context.query.term}${
        context.query.searchType && '&searchType=image'
      }&start=${startIndex}
  `).then(res => res.json());

  return {
    props: {
      searchResults,
    },
  };
};

const Search = ({ searchResults }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - search</title>
      </Head>

      <SearchHeader />

      {router.query.searchType === 'image' ? (
        <ImageResults results={searchResults} />
      ) : (
        <SearchResults results={searchResults} />
      )}
    </div>
  );
};

export default Search;
