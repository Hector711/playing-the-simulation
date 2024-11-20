import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ProtectedDiv from './_components/ProtectedDiv';

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
    <>
      <ProtectedDiv>
        <Navbar />
        {children}
      </ProtectedDiv>
    </>
  );
}
