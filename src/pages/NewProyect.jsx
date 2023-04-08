import { useState } from "react";

const NewProyect = () => {
  const [proyect, setProyect] = useState({
    name: "",
  });

  const { name } = proyect;

  const onChangeProyect = (e) => {
    setProyect({
      ...proyect,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitProyect = (e) => {
    e.preventDefault();

    // Restart form
    setProyect({
      name: "",
    });
  };

  return (
    <div className="fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-gray-800">
      <form
        className="flex h-full w-11/12 sm:w-6/12 flex-col items-center justify-center gap-3"
        onSubmit={onSubmitProyect}
      >
        <input
        autoFocus
          autoComplete="off"
          type="text"
          className="bg-transparent px-10  py-3 text-center text-sm uppercase text-white outline-none w-full"
          placeholder="Nombre del Proyecto"
          name="name"
          value={name}
          onChange={onChangeProyect}
        />

        <input
          type="submit"
          className="w-full cursor-pointer rounded bg-slate-950 px-10 py-3 text-sm uppercase text-white hover:bg-slate-900"
          value="Guardar"
        />
      </form>
    </div>
  );
};

export default NewProyect;
