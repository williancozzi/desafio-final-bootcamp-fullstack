import React from "react";

export default function Select({ dates }) {
  return (
    <div style={styles.flexRow}>
      <div style={styles.widthNew}>
        <button
          className="waves-effect waves-light btn"
          style={styles.buttonLeft}
        >
          {" "}
          ←{" "}
        </button>

        <select className="browser-default">
          <option defaultValue disabled>
            Escolha a data
          </option>
          {dates.map((date, index) => {
            return <option key={index}>{date}</option>;
          })}
        </select>
        <button
          className="waves-effect waves-light btn"
          style={styles.buttonRight}
        >
          {" "}
          →{" "}
        </button>
      </div>
    </div>
  );
}

const styles = {
  widthNew: {
    display: "flex",
  },
  flexRow: {
    display: "flex",
    justifyContent: "center",
  },
  buttonLeft: {
    marginRight: "10px",
    height: "44px",
  },
  buttonRight: {
    marginLeft: "10px",
    height: "44px",
  },
};
