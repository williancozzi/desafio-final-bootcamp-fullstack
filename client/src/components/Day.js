import React from "react";

export default function Day({ value, category, description, day, type }) {
  return (
    <div>
      {type === "+" ? (
        <div style={styles.flexDayPositive}>
          <label style={styles.flexLabel}>{day}</label>
          <div>
            <label style={styles.flexLabel}>{category}</label>
            <label style={styles.flexLabel}>{description}</label>
          </div>

          <label style={styles.valueLabel}>Tipo {type}</label>
          <label style={styles.valueLabel}>R${value}</label>
        </div>
      ) : (
        <div style={styles.flexDayNegative}>
          <label style={styles.flexLabel}>{day}</label>
          <div>
            <label style={styles.flexLabel}>{category}</label>
            <label style={styles.flexLabel}>{description}</label>
          </div>

          <label style={styles.valueLabel}>Tipo {type}</label>
          <label style={styles.valueLabel}>R${value}</label>
        </div>
      )}
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
  },
  flexDayNegative: {
    padding: "5px",
    margin: "20px",
    border: "1px solid lightgrey",
    borderRadius: "6px",
    display: "flex",
    backgroundColor: "#ff8080",
  },
  flexLabel: {
    margin: "10px",
    display: "flex",
    alignItems: "center",
    color: "black",
  },
  valueLabel: {
    marginLeft: "auto",
    alignSelf: "center",
    marginRight: "10vw",
    color: "black",
  },
};
