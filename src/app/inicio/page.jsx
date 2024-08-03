import ModelLeft from "@/layouts/ModelLeft";
import AsideProfile from "@/components/AsideProfile";
import ModelRight from "@/layouts/ModelRight";
import { AuthButtonServer } from "@/components/AuthButtonServer";
import ModelMain from "@/layouts/ModelMain";
import BodyGrid from "@/layouts/BodyGrid";
import News from "@/components/News";

export default function Inicio() {
  return (
    <BodyGrid>
      <ModelLeft>
        <AsideProfile />
      </ModelLeft>
      <ModelMain title="Timeline">
        <div>
          <h1>Timeline</h1>
          <h1>Hello World</h1>
        </div>
      </ModelMain>
      <ModelRight id='news' className='blurr'>
        <News />
      </ModelRight>
    </BodyGrid>
  );
}
