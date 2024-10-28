'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MiniNav({
  nav,
}: {
  nav: { title: string; page: string; slug: string }[];
}) {
  const pathname = usePathname();
  return (
    <nav id='main-nav'>
      {nav.map((item, i) => (
        <Link
          key={i}
          href={`/${item.page}/${item.slug}`}
          className={
            pathname === `/${item.page}/${item.slug}`
              ? 'active-link'
              : 'inactive-link'
          }
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
