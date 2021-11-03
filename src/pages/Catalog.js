import React from 'react';

import { useParams } from 'react-router';
import HeaderPage from '../components/UI/header-page/HeaderPage';

import { category as ctg } from '../api/tmdbApi';
import MovieGrid from '../components/movie-grid/MovieGrid';

const Catalog = () => {
  const { category } = useParams();

  console.log(category);

  return (
    <>
      <HeaderPage>{category === ctg.movie ? 'Movie' : 'TV Series'}</HeaderPage>
      <div className='container'>
        <div className='section mb-3'>
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  );
};

export default Catalog;
