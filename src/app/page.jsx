import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButtonServer } from "@/components/AuthButtonServer";
import { redirect } from "next/navigation";
import ModelLeft from "@/layouts/ModelLeft";
import AsideProfile from "@/components/AsideProfile";
import ModelRight from "@/layouts/ModelRight";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const { data: posts } = await supabase.from("posts").select();
  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <div id='body-grid'>
        <ModelLeft>
          <AsideProfile />
        </ModelLeft>
        <main className="flex flex-col items-center justify-center h-screen">
          <AuthButtonServer />
          <div>
            <pre>{JSON.stringify(posts, null, 2)}</pre>
            <h1>Hello World</h1>
          </div>
        </main>
        <ModelRight>Right</ModelRight>
      </div>
    </>
  );
}
