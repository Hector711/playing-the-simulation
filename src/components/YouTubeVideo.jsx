import React from 'react';

export default function YouTubeVideo({ url }) {
  return (
    <figure className='video-container blurr shadoww'>
      <iframe
        src={url}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
        className='video'
      ></iframe>
    </figure>
  );
}
