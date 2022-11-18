import { useSelector } from "react-redux";

const ComponentRedux2 = () => {
  const userState = useSelector(store => store.user);

  return(
    <div>
      <p>ComponentRedux2</p>
      <div>El nombre del usuario es: {JSON.stringify(userState)}</div>
    </div>
  );
};

export default ComponentRedux2;