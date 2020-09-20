import React from "react";

export default function Records({ header }) {
  const { entries, expense, income, balance } = header;

  return (
    <div style={styles.center}>
      <div style={styles.flex}>
        <span>Lançamentos: {entries} </span>
        <span>Receita: {income}</span>
        <span>Despesa: {expense}</span>
        <span>Saldo: {balance}</span>
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
    margin: "20px",
    border: "1px solid lightgrey",
    borderRadius: "6px",
    width: "70%",
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
};
