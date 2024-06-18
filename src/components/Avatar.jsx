import React from 'react';

export default function Avatar({ src, business }) {
  if (business) {
    return (
      <img alt='Foto de perfil' src={src} className='avatar entrepeneur' />
    );
  } else {
    return <img alt='Foto de perfil' src={src} className='avatar employee' />;
  }
}