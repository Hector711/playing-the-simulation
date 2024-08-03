import ModelLeft from "@/layouts/ModelLeft";
import AsideProfile from "@/components/AsideProfile";
import ModelRight from "@/layouts/ModelRight";
import { AuthButtonServer } from "@/components/AuthButtonServer";

export default function Inicio() {
  return (
    <div id='body-grid'>
        <ModelLeft>
          <AsideProfile />
        </ModelLeft>
        <main className="flex flex-col items-center justify-center h-screen">
          <AuthButtonServer />
          <div>

            <h1>Hello World</h1>
          </div>
        </main>
        <ModelRight>Right</ModelRight>
      </div>
  )
}
