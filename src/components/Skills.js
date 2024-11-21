import React from "react";

const Skills = () => {
  return (
    <div className="mt-5">
      <h2 className="h4 text-uppercase">Habilidades</h2>
      <ul className="list-unstyled">
        <li className="mb-3">
          <strong>HTML:</strong>
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: "70%" }}
            ></div>
          </div>
        </li>
        <li className="mb-3">
          <strong>JavaScript:</strong>
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: "20%" }}
            ></div>
          </div>
        </li>
        <li className="mb-3">
          <strong>Herramientas Ofimáticas (Excel, Word, Trello):</strong>
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: "85%" }}
            ></div>
          </div>
        </li>
        <li className="mb-3">
          <strong>CSS:</strong>
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: "40%" }}
            ></div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
