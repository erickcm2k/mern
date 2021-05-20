import React, { useEffect, useState } from "react";

const BandList = ({ data, vote, deleteBand }) => {
  const [bands, setBands] = useState(data);

  useEffect(() => {
    setBands(data);
  }, [data]);

  const changeName = (e, id) => {
    const newName = e.target.value;
    setBands((bands) =>
      bands.map((band) => {
        if (band.id === id) {
          band.name = newName;
        }
        return band;
      })
    );
  };

  const onBlurLoss = (id, name) => {
    // Submit changes
  };

  const createRows = () => {
    return bands.map((band) => (
      <tr key={band.id}>
        <td>
          <button className="btn btn-primary" onClick={() => vote(band.id)}>
            +1
          </button>
        </td>
        <td>
          <input
            type="text"
            className="form-control"
            value={band.name}
            onChange={(e) => changeName(e, band.id)}
            onBlur={() => onBlurLoss(band.id, band.name)}
          />
        </td>
        <td>
          <h3>{band.votes}</h3>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => deleteBand(band.id)}
          >
            Borrar
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Votos</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>{createRows()}</tbody>
      </table>
    </>
  );
};

export default BandList;
