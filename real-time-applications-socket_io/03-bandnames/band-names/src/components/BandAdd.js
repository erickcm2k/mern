import React from "react";

const BandAdd = () => {
  return (
    <>
      <h3>Agregar banda</h3>
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Nuevo nombre de banda"
        />
      </form>
    </>
  );
};

export default BandAdd;
