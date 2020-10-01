import React from "react";

export default function Filter({ onFilterChange }) {
  const handleFilter = (event) => {
    onFilterChange(event);
  };

  return (
    <div style={styles.flexDiv}>
      <button
        style={{ marginTop: "10px" }}
        className="waves-effect waves-light btn"
      >
        {" "}
        + Novo lançamento{" "}
      </button>
      <div style={styles.inputDiv}>
        <input
          id="filter"
          placeholder="Filtro"
          type="text"
          onKeyUp={handleFilter}
        />
        <label htmlFor="filter">
          Busque pela descrição (Ex: almoço, compra, táxi){" "}
        </label>
      </div>
    </div>
  );
}

const styles = {
  flexDiv: {
    display: "flex",
    padding: "20px",
    justifyContent: "space-evenly",
    marginRight: "20px",
  },
  inputDiv: {
    width: "60%",
  },
};
