export default function Avatar({ src, business }) {
  if (business && business.length > 0) {
    return (
      <figure className='avatar-container entrepeneur'>
        <img alt='Foto de perfil' src={src} className='avatar ' />
      </figure>
    );
  } else {
    return (
      <figure className='avatar-container employee'>
        <img alt='Foto de perfil' src={src} className='avatar ' />
      </figure>
    );
  }
}
