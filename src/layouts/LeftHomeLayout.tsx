import AsideProfile from '@/components/AsideProfile';

export default function LeftHomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AsideProfile />
      {children}
    </>
  );
};
