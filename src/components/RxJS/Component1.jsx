import { sharingInformationService } from "../../services/sharing-information.service";



const Component1 = () => {
  const handleClick = () => {
    sharingInformationService.setSubject(true);
  };
  const handleClickNo = () => {
    sharingInformationService.setSubject(false);
  };
  return (
    <div className="container-xxl">
      <p>Hola desde el componente1</p>
      <div>
        <button className="btn btn-success btn-lg" onClick={handleClick}>Enviar Infomacion</button>
        <button className="btn btn-success btn-lg" onClick={handleClickNo}>No Enviar Infomacion</button>
      </div>
    </div>
  );
};

export default Component1;