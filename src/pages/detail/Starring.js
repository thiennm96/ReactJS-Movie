import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import './Detail.scss';

const Starring = (props) => {
  const { category } = useParams();

  const [starring, setStarring] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const response = await tmdbApi.credits(category, props.id);
      setStarring(response.cast.slice(0, 5));
    };
    getCredits();
  }, [category, props.id]);
  return (
    <div className='starring'>
      {starring.map((item, index) => (
        <div key={index} className='starring__item'>
          <div
            className='starring__item__img'
            style={{
              backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`,
            }}
          ></div>
          <p className='starring__item__name'>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Starring;
