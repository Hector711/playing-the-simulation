import WhatsAppIcon from '@/icons/WhatsAppIcon';
import Button from '@/components/Button';

export default function NotAvailable() {
  return (
    <div className='p-20 flex flex-col gap-10'>
      <h3 className='text-red-500 text-center text-2xl'>
        UPS!
      </h3>

      <p className='text-center text-lg'>
        Esta sección no está disponible en este momento.
      </p>
      <p className='text-center text-lg'>Pero pronto lo estará...</p>
      <p className='text-center text-lg'>
        Si quieres estar pendiente de las nuevas actualizaciones, métete en la
        comunidad de WhatsApp!
      </p>
      <Button
        href='https://chat.whatsapp.com/L555555555555555555555'
        className='flex items-center justify-center gap-2 button w-fit mx-auto'
      >
        <WhatsAppIcon className='w-10 h-10 ' />
        Unirse a la comunidad
      </Button>
    </div>
  );
}
