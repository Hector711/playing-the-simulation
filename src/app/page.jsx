import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const { data: posts } = await supabase.from("posts").select();
  if (!session) {
    redirect("/login");
  } else {
    redirect("/inicio");
  }
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
