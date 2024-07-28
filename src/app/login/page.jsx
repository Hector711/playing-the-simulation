import { AuthButtonServer } from "@/app/components/AuthButtonServer";

export default function Login() {
  return (
    <section className="grid place-content-center min-h-screen">
      <h1>Inicia sesión</h1>
      <AuthButtonServer />
    </section>
  );
}
