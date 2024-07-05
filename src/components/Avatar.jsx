import React from 'react';

export default function Avatar({ src, business }) {
  if (business && business.length > 0 ) {
    return (
      <img alt='Foto de perfil' src={src} className='avatar entrepeneur' />
    );
  } else {
    return <img alt='Foto de perfil' src={src} className='avatar employee' />;
  }
}
