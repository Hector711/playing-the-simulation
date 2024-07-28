"use client";

import GitHubIcon from "@/icons/GitHubIcon";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter, redirect } from "next/navigation";

export default function AuthButton({ session }) {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
    if (error) {
      console.log(error);
    }
    console.log(data);
  };
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
    router.refresh();
  };
  console.log("session:", session);

  return (
    <>
      {session === null ? (
        <button
          type="button"
          className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
          onClick={handleSignIn}
        >
          <GitHubIcon />
          Iniciar sesion con Github
        </button>
      ) : (
        <button onClick={handleSignOut}>Cerrar Sesión</button>
      )}
    </>
  );
}
