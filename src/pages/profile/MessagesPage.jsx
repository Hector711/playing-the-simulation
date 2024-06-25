import React from 'react';
import ModelMain from '@/layouts/ModelMain';
import Telegram from '@/icons/Telegram';
import WhatsApp from '@/icons/WhatsApp';

export default function MessagesPage() {
  return (
    <>
      <ModelMain title='Mensajes' id='messages'>
        <div id='groups-links'>
          <a href='https://t.me/+CJnGK4m02iQ4NmE0' target='_blank'>
            {' '}
            <WhatsApp /> Grupo de WhatsApp (Avisos)
          </a>
          <a href='https://t.me/+CJnGK4m02iQ4NmE0' target='_blank'>
            {' '}
            <Telegram /> Grupo de Telegram (Charla)
          </a>
        </div>
      </ModelMain>
    </>
  );
}
