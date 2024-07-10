import React, { useState, useEffect } from 'react';
import { PopupModal } from 'react-calendly';
import Close from '@/icons/Close';
import { useProfile } from '@/context/ProfileContext';

export default function CalendlyPopUp() {
  const { state, onCalendlyPopUp, setState, onCloseAll } = useProfile();
  useEffect(() => {}, [state]);
  return(
    <>
    {state.addPopUp && (
          <div id='blur'>
            <article className='add-pop-up'>
              <button onClick={onCloseAll} id='close'>
                <Close />
              </button>
              <header>
                <h3>Agregar a un usuario</h3>
              </header>
              <section>
                <p>
                  Para poder agregar a un contacto debes realizar una llamada de
                  mínimo 30 minutos con el/ella.
                </p>
              </section>
              <div>
                <button id='calendly-button' onClick={onCalendlyPopUp}>
                  <p>Reservar llamada en</p>
                  <span>Calendly</span>
                </button>
              </div>
            </article>
          </div>
        )}
        <PopupModal
          url='https://calendly.com/hector-guerra/llamada-1-a-1'
          pageSettings={{
            backgroundColor: '28282a',
            hideEventTypeDetails: false,
            hideLandingPageDetails: true,
            primaryColor: '',
            textColor: '3133c5',
          }}
          onModalClose={() =>
            setState({
              addPopUp: false,
              calendlyPopUp: false,
            })
          }
          open={state.calendlyPopUp}
          rootElement={document.getElementById('root')}
        />
    </>
  )
}