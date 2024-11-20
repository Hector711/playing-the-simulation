import HomeButton from './HomeButton';
import AsideProfile from '@/app/(protected)/_components/AsideProfile';
import LogOutButton from '@/app/(protected)/_components/LogOutButton';
export default function Navbar() {
  return (
    <nav id='nav'>
      <HomeButton />
      <AsideProfile />
      <footer id='logout'>
        <LogOutButton />
      </footer>
    </nav>
  );
}
