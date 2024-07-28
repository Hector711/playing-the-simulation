import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButtonServer } from "@/app/components/AuthButtonServer";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: session } = await supabase.auth.getSession();
  if (!session) {
    redirect("/login");
  }

  const { data: posts } = await supabase.from("posts").select();

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <AuthButtonServer />
      <div>
        <pre>{JSON.stringify(posts, null, 2)}</pre>
        <h1>Hello World</h1>
      </div>
    </main>
  );
}
