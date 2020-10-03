import React, { useEffect, useState } from "react";

export default function CustomSelect({ dates, onChangeSelect, initialValue }) {
  let formSelect = React.createRef();

  const [periodValue, setPeriodValue] = useState(initialValue);
  const [leftButtonDisabled, setLeftButtonDisabled] = useState(false);
  const [rightButtonDisabled, setRightButtonDisabled] = useState(false);

  useEffect(() => {
    formSelect.current.value = new Date().toISOString().slice(0, 7);
    setPeriodValue(initialValue);
    //console.log("Posição da Initial Date: ", dates.indexOf(initialValue));
    // eslint-disable-next-line
  }, [initialValue]);

  const handleSelect = (event) => {
    const periodValue = event.target.value;
    setPeriodValue(periodValue);
    onChangeSelect(periodValue);
    rightButtonCheck();
    leftButtonCheck();
  };

  const rightButtonCheck = () => {
    if (dates.indexOf(periodValue) === 35) {
      setRightButtonDisabled(true);
    } else {
      setRightButtonDisabled(false);
    }
  };
  const leftButtonCheck = () => {
    if (dates.indexOf(periodValue) === 0) {
      setLeftButtonDisabled(true);
    } else {
      setLeftButtonDisabled(false);
    }
  };

  const clickButton = (direction) => {

    rightButtonCheck();
    leftButtonCheck();

    if (direction === "r") {
      console.log("Direita");

      console.log("Posição no Vetor: ", dates.indexOf(periodValue));
      console.log("Próximo Objeto: ", dates[dates.indexOf(periodValue) + 1]);

      rightButtonCheck();
    } else {
      console.log("Esquerda");
      console.log("Posição no Vetor: ", dates.indexOf(periodValue));
      console.log("Próximo Objeto: ", dates[dates.indexOf(periodValue) - 1]);

      leftButtonCheck();
    }
  };

  return (
    <div style={styles.flexRow}>
      <div style={styles.widthNew}>
        <button
          disabled={leftButtonDisabled}
          className="waves-effect waves-light btn"
          style={styles.buttonLeft}
          onClick={(value) => clickButton("l")}
        >
          {" "}
          ←{" "}
        </button>

        <select
          className="browser-default"
          onChange={handleSelect}
          ref={formSelect}
        >
          {dates.map((date, index) => {
            return <option key={index}>{date}</option>;
          })}
        </select>

        <button
          disabled={rightButtonDisabled}
          className="waves-effect waves-light btn"
          style={styles.buttonRight}
          onClick={(value) => clickButton("r")}
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
