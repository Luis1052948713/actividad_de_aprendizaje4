import React from "react";

const Interests = () => {
  return (
    <div className="mt-5">
      <h2 className="h4 text-uppercase">Intereses Personales</h2>
      <ul className="list-inline">
        <li className="list-inline-item">
          <i className="fa fa-gamepad"></i> Videojuegos
        </li>
        <li className="list-inline-item">
          <i className="fa fa-futbol-o"></i> Jugar Fútbol
        </li>
        <li className="list-inline-item">
          <i className="fa fa-book"></i> Leer
        </li>
        <li className="list-inline-item">
          <i className="fa fa-graduation-cap"></i> Estudiar
        </li>
      </ul>
    </div>
  );
};

export default Interests;
