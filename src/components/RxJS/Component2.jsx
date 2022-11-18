import { sharingInformationService } from "../../services/sharing-information.service";
import { useEffect, useState } from "react";

const Component2 = () => {

  const [count, setcount] = useState(0);
  const subscription$ = sharingInformationService.getSubject();
  useEffect(() => {
    subscription$.subscribe(data => {
      //console.log(data);
      if (!!data) setcount(count + 1);
    })
  });

  return (
    <div className="container-xxl">
      <p>Hola desde el Componente 2</p>
      <div>{count}</div>
    </div>
  );
};

export default Component2;