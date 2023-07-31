import { useState } from "react";

const Item = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      {visto ? "✅" : "❌"}
    </li>
  );
};

export const ListadoApp = () => {
  const addTask = () => {
    setarreglo([...arreglo, { nombre: "nuevo", visto: false }]);
  };

  let listadoSecciones = [
    { nombre: "instalaciones necesarias", visto: true },
    { nombre: "uso de vite", visto: true },
    { nombre: "componentes", visto: true },
    { nombre: "variables", visto: true },
    { nombre: "props", visto: true },
    { nombre: "eventos", visto: true },
    { nombre: "useState", visto: true },
    { nombre: "redux", visto: false },
    { nombre: "customHooks", visto: false },
  ];
  const [arreglo, setarreglo] = useState(listadoSecciones);
  console.log(arreglo);
  return (
    <>
      <h1>Listado del tema del curso react</h1>
      <ol>
        {arreglo.map((item) => (
          <Item
            key={item.nombre}
            nombre={item.nombre}
            visto={item.visto}
          ></Item>
        ))}
      </ol>

      <button onClick={() => addTask()}>Agregar Tarea</button>
    </>
  );
};
