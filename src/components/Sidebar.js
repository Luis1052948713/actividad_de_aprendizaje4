import React from "react";

const Sidebar = () => {
  return (
    <div className="col-md-4 bg-dark text-light p-4 rounded-start">
      <h3 className="h5 bg-warning text-dark p-2 rounded">
        Información de Contacto
      </h3>
      <ul className="list-unstyled">
        <li className="my-2">
          <i className="fa fa-phone"></i> (+57) 302-208-1692
        </li>
        <li className="my-2">
          <i className="fa fa-linkedin"></i>{" "}
          <a
            href="https://www.linkedin.com/in/luis-2004barbosa-21orozco/"
            className="text-light"
          >
            LinkedIn
          </a>
        </li>
        <li className="my-2">
          <i className="fa fa-envelope"></i>{" "}
          luisfernandobarbosaorozco7@gmail.com
        </li>
        <li className="my-2">
          <i className="fa fa-github"></i>{" "}
          <a href="https://github.com/Luis1052948713" className="text-light">
            GitHub
          </a>
        </li>
        <li className="my-2">
          <i className="fa fa-map-marker"></i> Magangué, Bolívar, Colombia
        </li>
      </ul>

      <h3 className="h5 bg-warning text-dark p-2 rounded mt-4">Educación</h3>
      <ul className="list-unstyled">
        <li className="my-2">
          <strong>2021:</strong> Bachillerato - Institución Educativa San Mateo
        </li>
        <li className="my-2">
          <strong>2023:</strong> Técnico en Inglés Conversacional B2 -
          Corporación Elyon Yireh
        </li>
        <li className="my-2">
          <strong>2024:</strong> Ingeniería de Software - Universidad de
          Cartagena (5to Semestre)
        </li>
      </ul>

      <h3 className="h5 bg-warning text-dark p-2 rounded mt-4">Idiomas</h3>
      <ul className="list-unstyled">
        <li className="my-2">
          Español:
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: "95%" }}
            ></div>
          </div>
        </li>
        <li className="my-2">
          Inglés:
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: "45%" }}
            ></div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
