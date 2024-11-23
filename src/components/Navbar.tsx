import HomeButton from './HomeButton';
import AsideProfile from '@/app/(protected)/_components/AsideProfile';
import LogOutButton from '@/app/(protected)/_components/LogOutButton';
import AsideLinks from '@/app/(protected)/_components/AsideLinks';

export default function Navbar() {
  return (
    <nav id='nav'>
      <HomeButton />
      <hr />
      <AsideProfile />
      <hr />
      <AsideLinks />
    </nav>
  );
}
