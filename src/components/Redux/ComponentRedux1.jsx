import { useDispatch } from "react-redux";
import { createUser, modifyUser, resetUser } from "../../redux/states/user";

const ComponentRedux1 = () => {
  const dispatcher = useDispatch();
  const handleclick = () => {
    dispatcher(createUser({name: 'alan', email: 'gmail@gmail.com'}));
  }
  const handleclickModify = () => {
    dispatcher(modifyUser({name: 'alan modificado', email: 'gmail@gmail.com'}));
  }
  const handleclickReset = () => {
    dispatcher(resetUser());
  }
  return(
    <div>
      <p>Redux1</p>
      <button type="button" onClick={handleclick}>Enviar Informacion con Redux CreateUser</button>
      <button type="button" onClick={handleclickModify}>Enviar Informacion con Redux ModifyUser</button>
      <button type="button" onClick={handleclickReset}>Enviar Informacion con Redux ResetUser</button>
    </div>
  );
};

export default ComponentRedux1;