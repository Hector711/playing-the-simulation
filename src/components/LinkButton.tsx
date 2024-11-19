/** @format */
'use client';
import Link from 'next/link';

interface LinkButtonProps {
  href: string;
  id?: string;
  children: React.ReactNode;
}

export default function LinkButton({
  href,
  children,
  id,
}: LinkButtonProps) {
  return (
    <Link href={href} id={id} className='link-button-a'>
      {children}
    </Link>
  );
}
