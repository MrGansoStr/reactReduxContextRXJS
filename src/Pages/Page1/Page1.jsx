import ComponentContext1 from "./Components/ComponentContext1";
import ComponentContext2 from "./Components/ComponentContext2";
import ComponentRedux2 from "./Components/ComponentRedux2";
import { Page1Provider } from "./context/page1.context";
const Page1 = () => {

  return (
    <div>
      <p>Pagina 1</p>
      <Page1Provider>
        <ComponentContext1 />
        <ComponentContext2 />
        <ComponentRedux2/>
      </Page1Provider>
    </div>
  );
};

export default Page1;