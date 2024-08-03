import './module.scss';
import { AuthButtonServer } from "@/components/AuthButtonServer";
import Game from '@/icons/Game';

export default function Login() {
  return (
    <div id="wellcome-body">
      <header className="wellcome">
        <MainTitle />
      </header>
      <section className="wellcome">
        <h1>Inicia sesión</h1>
        <AuthButtonServer />
      </section>
    </div>
  );
}

function MainTitle() {
  return (
    <>
      <h1 className="main-title">Playing The Simulation 2.0</h1>
      <div>
        <h3 className="impact ">Make PTS Great Again</h3>
        <Game />
      </div>
    </>
  );
}
