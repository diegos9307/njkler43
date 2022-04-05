import React, { useState } from "react";
import posts from "./posts";

// Modifica el componente App para implmentar la funcionalidad requerida

const App = () => {
  const [filter, setFilter] = useState("");
  const [data] = useState(posts);

  // const handleFilter = (e) => {
  //   setFilter(e.target.value);
  //   filtrar(e.target.value);
  // };

  // const filtrar = (terminoBusqueda) => {
  //   var resultadosBusqueda = data.filter((el) => {
  //     if (
  //       el.title
  //         .toString()
  //         .toLocaleLowerCase()
  //         .includes(terminoBusqueda.toLocaleLowerCase())
  //     ) {
  //       return el;
  //     }
  //   });
  //   setData(resultadosBusqueda);
  // };

  return (
    <div>
      <div className="filter">
        <input
          type="text"
          placeholder="Ingresa el término de búsqueda"
          value={filter}
          // onChange={(handleFilter)}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </div>
      <ul>
        {data
          .filter((val) => {
            if (filter === "") {
              return val;
            } else if (
              val.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .map(({ url, image, title }, index) => (
            <li key={index}>
              <a href={url}>
                <img src={image} alt="" />
              </a>
              <p>{title}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
