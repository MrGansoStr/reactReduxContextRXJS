import { usepage1context } from "../context/page1.context";

const ComponentContext2 = () => {
  const { page1ContextValue } = usepage1context();
  return(
    <div>El valor es: { page1ContextValue }</div>
  );
};

export default ComponentContext2;