import type { Metadata } from 'next';
// INIT
import '@/styles/reset/reset.scss';
import '@/styles/init.scss';
// COMPONENTS
import '@/styles/comp_spinner.scss';

/*
 * PROTECTED
 **/
// PAGES
import '@/app/(protected)/_styles/page_home.scss';
// COMPONENTS
import '@/app/(protected)/_styles/comp_news.scss';
import '@/app/(protected)/_styles/comp_aside_profile.scss';
import '@/app/(protected)/_styles/comp_avatar.scss';
import '@/app/(protected)/_styles/comp_post.scss';
import '@/app/(protected)/_styles/comp_new_post.scss';
import '@/app/(protected)/_styles/mini_profile.scss';

// LAYOUT
import '@/app/(protected)/_styles/layout_navbar.scss';
import '@/app/(protected)/_styles/layout_model.scss';
/*
 * UNPROTECTED
 **/
import '@/app/(unprotected)/_styles/page_wellcome.scss';

export const metadata: Metadata = {
  title: 'Playing The Simulation',
  description: 'Playing The Simulation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
