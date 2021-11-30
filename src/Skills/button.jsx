import React from "react";
import { Button } from "antd";
const Buttonskills = (props) => {
  const taille=  {
    size: "large",
  };

  return (
    <div>
      <Button type="primary" size={taille} style={{margin:'5px', textTransform: 'capitalize'}}>
    {props.competences}
      </Button>
    </div>
  );
};

export default Buttonskills;
