import { usepage1context } from "../context/page1.context";

const ComponentContext1 = () => {

  const { setpage1ContextValue } = usepage1context();

  const handleClick = () => {
    setpage1ContextValue("hola bb");
  }
  return(
    <div>
      <button type="button" onClick={handleClick}>Enviar Info con Context</button>
    </div>
  );
};

export default ComponentContext1;