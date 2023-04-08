import { useState } from "react";
import ProyectName from "../components/ProyectName";

const NewProyect = () => {
  const [proyect, setProyect] = useState({
    name: "",
  });

  const onSubmitProyect = (e) => {
    e.preventDefault();
    console.log(proyect);
    // Restart form
    setProyect({
      name: "",
    });
  };

  return (
    <>
    {
        !proyect.name && (
            <ProyectName
              onSubmitProyect={onSubmitProyect}
              setProyect={setProyect}
              proyect={proyect}
            />

        )
    }
    </>
  );
};

export default NewProyect;
