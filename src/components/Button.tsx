'use client';
import Link from 'next/link';

interface LinkButtonProps {
  href?: string;
  id?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'submit' | 'reset';
}
const tailwindStyles = 'bg-white hover:bg-gray-400 transition duration-600 text-black font-medium py-2 px-4 rounded-xl flex gap-2';

export default function Button({
  onClick,
  href,
  children,
  id,
  className,
  type,
}: LinkButtonProps) {
  if (href) {
    return (
      <Link href={href} id={id} className={` ${className} ${tailwindStyles}`}>
        {children}
      </Link>
    );
  }
  if (onClick || type) {
    return (
      <button
        onClick={onClick}
        id={id}
        className={` ${className} ${tailwindStyles}`}
        type={type}
      >
        {children}
      </button>
    );
  }
  return null;
}
