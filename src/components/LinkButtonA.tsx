/** @format */
'use client';
import Link from 'next/link';

interface LinkButtonAProps {
  href: string;
  id?: string;
  children: React.ReactNode;
}

export default function LinkButtonA({
  href,
  children,
  id,
}: LinkButtonAProps) {
  return (
    <Link href={href} id={id} className='link-button-a'>
      {children}
    </Link>
  );
}
