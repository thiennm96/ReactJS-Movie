import React, { useState, useEffect, useRef } from 'react';

import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';

import './Detail.scss';

const VideoList = (props) => {
  const { category } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const response = await tmdbApi.getVideos(category, props.id);
      setVideos(response.results.slice(0, 5));
    };
    getCredits();
  }, [category, props.id]);

  return (
    <>
      {videos.map((video, index) => (
        <Video key={index} item={video} />
      ))}
    </>
  );
};

const Video = (props) => {
  const item = props.item;
  const iframeRef = useRef(null);

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + 'px';
    iframeRef.current.setAttribute('height', height);
  }, []);

  return (
    <div className='video'>
      <div className='video__title'>
        <h2>{item.name}</h2>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${item.key}`}
        ref={iframeRef}
        width='100%'
        title='video'
      ></iframe>
    </div>
  );
};

export default VideoList;
