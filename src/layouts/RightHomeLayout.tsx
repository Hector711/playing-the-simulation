import News from '@/components/News';

export default function RightHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <News />
    </>
  );
}
