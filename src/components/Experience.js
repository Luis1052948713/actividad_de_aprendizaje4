import React from "react";

const Experience = () => {
  return (
    <div>
      <h2 className="h4 text-uppercase">Experiencia</h2>

      {/* Proyecto 1 */}
      <div className="border p-3 mb-4">
        <h5 className="mb-2">
          Juego de Adivinanza (JavaScript) - Proyectos Académicos (2022 - 2023)
        </h5>
        <p>
          Proyecto de un curso de Oracle usando JavaScript como método de
          práctica. Puedes probarlo aquí:{" "}
          <a
            href="https://luis1052948713.github.io/juegoSecreto/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adivina un número
          </a>
          .
        </p>
      </div>

      {/* Proyecto 2 */}
      <div className="border p-3 mb-4">
        <h5 className="mb-2">
          Encriptador de Textos (JavaScript) - Proyectos Académicos (2022 -
          2023)
        </h5>
        <p>
          Diseño y desarrollo de una aplicación web para la encriptación de
          textos, usando JavaScript.{" "}
          <a
            href="https://luis1052948713.github.io/encriptador-de-texto/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Proyecto
          </a>
          .
        </p>
      </div>

      {/* Proyecto 3 */}
      <div className="border p-3 mb-4">
        <h5 className="mb-2">
          Microempresa - Aromas y Limpieza F.R.O (2022 - 2024)
        </h5>
        <p>
          En nuestro negocio familiar utilizamos un software integral contable
          para la gestión de productos y finanzas.
        </p>
      </div>

      {/* Proyecto 4 */}
      <div className="border p-3 mb-4">
        <h5 className="mb-2">
          Proyecto de Portafolio - Proyectos Académicos (2022 - 2023)
        </h5>
        <p>
          Desarrollo de una página web para mi portafolio utilizando HTML y CSS.{" "}
          <a
            href="https://luis1052948713.github.io/portafolio/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Portafolio
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Experience;
