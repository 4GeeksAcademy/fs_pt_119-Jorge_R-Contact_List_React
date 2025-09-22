
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

import React, { useState } from "react";

export const AddContact = () => {

  const [rellenar, setRellenar] = useState("")

  

  return (

    <form className="row g-3 p-4">
      <h1 className="Centrado">Agregar nuevo contacto</h1>
      <div className="col-md-12">
        <label for="inputName" className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="inputName"
          placeholder="Introduce tu nombre completo"
        />
      </div>
      <div className="col-12">
        <label for="inputEmail" className="form-label">Correo Electrónico</label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          placeholder="dominio@hosting.com"
        />
      </div>
      <div className="col-12">
        <label for="inputAddress" className="form-label">Dirección</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="Escribe tu dirección completa"
        />
      </div>
      <div className="col-md-12">
        <label for="inputPhone" className="form-label">Teléfono</label>
        <input
          type="phone"
          className="form-control"
          id="inputPhone"
          placeholder="987654321"
        />
      </div>
      <button type="button" className="btn btn-primary">Guardar</button>
      <Link to="/">
        <span className="navbar-brand mb-0 h1">Regresar a la lista de contactos</span>
      </Link>
    </form>

  )
}