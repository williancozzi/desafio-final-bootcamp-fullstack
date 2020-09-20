import React from "react";

export default function Day({ value, category, description, day }) {
  return (
    <div>
      <div style={styles.flexDay}>
        <label>{value}</label>
        <label>{category}</label>
        <label>{description}</label>
        <label>{day}</label>
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
  },
};
