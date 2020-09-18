import React from "react";

export default function Records() {
  return (
    <div style={styles.center}>
      <div style={styles.flex}>
        <span>Lançamentos: </span>
        <span>Receita: </span>
        <span>Despesa: </span>
        <span>Saldo: </span>
      </div>
    </div>
  );
}

const styles = {
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px",
    margin: "10px",
    border: "1px solid lightgrey",
    borderRadius: "4px",
    width: "70%",
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
};
