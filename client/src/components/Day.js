import React from "react";

export default function Day({ value, category, description, day }) {
  return (
    <div>
      <div style={styles.flexDay}>
        <label style={styles.flexLabel}>{day}</label>
        <div>
          <label style={styles.flexLabel}>{category}</label>
          <label style={styles.flexLabel}>{description}</label>
        </div>

        <label style={styles.valueLabel}>R${value}</label>
      </div>
    </div>
  );
}

const styles = {
  flexDay: {
    padding: "5px",
    margin: "20px",
    border: "1px solid lightgrey",
    borderRadius: "6px",
    display: "flex",
  },
  flexLabel: {
    margin: "20px",
    display: "flex",
    alignItems: "center",
  },
  valueLabel: {
    marginLeft: "auto",
    alignSelf: "center",
    marginRight: "10vw",
  },
};
