import React, { useState } from "react";

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario
    setSuccessMessage(true); // Muestra el mensaje de éxito

    setTimeout(() => {
      setSuccessMessage(false); // Oculta el mensaje de éxito después de 3 segundos
    }, 3000);
  };

  return (
    <div className="sobremi">
      <h2 className="titulo2">Contáctame</h2>
      <form
        id="contactForm"
        className="needs-validation"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Ingresa tu nombre"
              required
            />
            <div className="invalid-feedback">
              Por favor, ingresa tu nombre.
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Ingresa tu correo"
              required
            />
            <div className="invalid-feedback">
              Por favor, ingresa un correo válido.
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Mensaje
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            placeholder="Escribe tu mensaje"
            required
          ></textarea>
          <div className="invalid-feedback">Por favor, ingresa un mensaje.</div>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Enviar Mensaje
        </button>
      </form>
      {/* Mensaje de éxito */}
      {successMessage && (
        <div id="successMessage" className="alert alert-success mt-4">
          ¡Mensaje enviado con éxito!
        </div>
      )}
    </div>
  );
};

export default ContactForm;
