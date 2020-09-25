import React from "react";

export default function Day({ value, category, description, day, type }) {
  return (
    <div>
      <div
        style={type === "+" ? styles.flexDayPositive : styles.flexDayNegative}
      >
        <div style={{ display: "flex", flex: 1 }}>
          <label style={styles.flexLabelBold}>{day}</label>
          <div style={{ flex: 1 }}>
            <label style={styles.flexLabelBold}>{category}</label>
            <label style={styles.flexLabel}>{description}</label>
          </div>
        </div>

        <label style={styles.valueLabel}>R$ {value}</label>

        <span style={styles.iconLabel} className="edit">
          <i className="material-icons">edit</i>
        </span>

        <span style={styles.iconLabel} className="delete" cursor="pointer">
          <i className="material-icons">delete</i>
        </span>
      </div>
    </div>
  );
}

const styles = {
  flexDayPositive: {
    padding: "5px",
    margin: "20px",
    border: "1px solid lightgrey",
    borderRadius: "6px",
    display: "flex",
    backgroundColor: "#c2f0c2",
    justifyContent: "space-between",
  },
  flexDayNegative: {
    padding: "5px",
    margin: "20px",
    border: "1px solid lightgrey",
    borderRadius: "6px",
    display: "flex",
    backgroundColor: "#ff8080",
    justifyContent: "space-between",
  },
  flexLabelBold: {
    margin: "10px",
    display: "flex",
    alignItems: "center",
    color: "black",
    fontWeight: "bold",
  },
  flexLabel: {
    margin: "10px",
    display: "flex",
    alignItems: "center",
    color: "black",
  },
  valueLabel: {
    alignSelf: "center",
    marginRight: "30vh",
    color: "black",
    fontWeight: "bold",
    fontSize: "large",
  },
  iconLabel: {
    alignSelf: "center",
    color: "black",
    marginRight: "20px",
    cursor: "pointer",
  },
};
