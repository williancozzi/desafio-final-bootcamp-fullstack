import React from "react";

export default function Day({ value, category, description, day, type }) {
  return (
    <div>
      <div
        style={type === "+" ? styles.flexDayPositive : styles.flexDayNegative}
      >
        <div style={{ display: "flex", flex: 1 }}>
          <label style={styles.flexLabel}>{day}</label>
          <div style={{ flex: 1 }}>
            <label style={styles.flexLabel}>{category}</label>
            <label style={styles.flexLabel}>{description}</label>
          </div>
        </div>

        <label style={styles.typeLabel}>
          {type === "+" ? "Receita" : "Despesa"}
        </label>
        <label style={styles.valueLabel}>R${value}</label>
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
  flexLabel: {
    margin: "10px",
    display: "flex",
    alignItems: "center",
    color: "black",
  },
  valueLabel: {
    alignSelf: "center",
    color: "black",
  },
  typeLabel: {
    flex: 1,
    alignSelf: "center",
    color: "black",
  },
};
