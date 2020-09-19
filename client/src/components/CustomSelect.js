import React, { useEffect, useState } from "react";


export default function CustomSelect({ dates, onChangeSelect, initialValue }) {
  let formSelect = React.createRef();

  const [periodValue, setPeriodValue] = useState(initialValue);

  useEffect(() => {
    formSelect.current.value = initialValue;

    console.log('Posição da Initial Date: ', dates.indexOf(initialValue));

  }, [initialValue]);

  const handleSelect = (event) => {
    const periodValue = event.target.value;
    setPeriodValue(periodValue);
    onChangeSelect(periodValue);
  };

  const clickButton = direction => {
    console.log("Dates: ", dates);
    console.log("Posição no Vetor: ", dates.indexOf(initialValue));
    console.log('Próximo Objeto: ', dates.indexOf(initialValue) + 1);

    if (direction === "r") {
      console.log("Direita");
      setPeriodValue(periodValue);

    } else {
      console.log("Esquerda");
    }
  };

  return (
    <div style={styles.flexRow}>
      <div style={styles.widthNew}>
        <button
          className="waves-effect waves-light btn"
          style={styles.buttonLeft}
          onClick={value => clickButton('l')}
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
          className="waves-effect waves-light btn"
          style={styles.buttonRight}
          onClick={value => clickButton('r')}
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
