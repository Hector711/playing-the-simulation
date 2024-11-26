'use client';

export default function MiniNavbar({
  nav
}: {
  nav: { title: string; section: string }[];
}) {
  return (
    <nav id='main-nav' className='flex gap-2'>
      {nav.map((item, i) => (
        <button
          key={i}
          className='flex bg-gray-400 px-[5px] py-[2px] rounded-lg text-black font-bold'
        >
          {item.title}
        </button>
      ))}
    </nav>
  );
}
