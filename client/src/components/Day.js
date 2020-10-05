import React from "react";
//import axios from "axios";
import DeleteModal from "./modal/DeleteModal";
import useModal from "./modal/useModal";

export default function Day({ _id, value, category, description, day, type }) {
  const { isShowing, toggle } = useModal();
  //const api = axios.create({ baseURL: "api" });

const handleEditButton = async (e) => {
  const id = e.target.id;
  console.log("editing ",id);
}

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
          <i className="material-icons" onClick={handleEditButton} id={_id}>edit</i>
        </span>

        <span style={styles.iconLabel} className="delete" cursor="pointer">
          <i className="material-icons" onClick={toggle} id={_id}>
            delete
          </i>
        </span>

        <div>
          <DeleteModal isShowing={isShowing} type="delete" hide={toggle} id={_id} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  flexDayPositive: {
    padding: "5px",
    margin: "20px",
    border: "1px solid DarkGray ",
    borderRadius: "6px",
    display: "flex",
    backgroundColor: "#55efc4",
    justifyContent: "space-between",
  },
  flexDayNegative: {
    padding: "5px",
    margin: "20px",
    border: "1px solid gray ",
    borderRadius: "6px",
    display: "flex",
    backgroundColor: "#fab1a0",
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
