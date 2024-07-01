import React from 'react';

export default function YouTubeVideo({ url }) {
  return (
    <div id='video-container'>
      <iframe
        width='560'
        height='315'
        src={url}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
        id='video'
      ></iframe>
    </div>
  );
}
