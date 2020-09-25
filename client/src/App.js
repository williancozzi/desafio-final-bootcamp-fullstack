import React from "react";
import axios from "axios";
import CustomSelect from "./components/CustomSelect";
import Records from "./components/Records";
import Month from "./components/Month";
import Filter from "./components/Filter";

const api = axios.create({ baseURL: "api" });

export default function App() {
  const [periodSelected, setPeriodSelected] = React.useState({
    transactions: [],
  });
  const [dates, setDates] = React.useState([]);
  const [period, setPeriod] = React.useState(null);
  const [actualDate, setActualDate] = React.useState("");

  React.useEffect(() => {
    const fetchDatesForSelect = async () => {
      const { data } = await api.get("/transaction/dates");

      setDates(data);
    };

    const fetchPeriodSelected = async () => {
      const actualDate = new Date().toISOString().slice(0, 7);
      const { data } = await api.get(
        `/transaction/byperiod/${period ? period : actualDate}`
      );

      setActualDate(actualDate);
      setPeriodSelected(data);
    };

    fetchPeriodSelected();
    fetchDatesForSelect();
  }, [period]);

  const handleDateSelect = (period) => {
    setPeriod(period);
  };

  return (
    <div>
      <div className="container">
        <h1 className="center">Desafio Final do Bootcamp Full Stack</h1>

        <CustomSelect
          initialValue={actualDate}
          dates={dates}
          onChangeSelect={handleDateSelect}
        />
      </div>

      <div>
        <Records header={periodSelected} />
      </div>

      <div>
        <Filter />
      </div>

      <div>
        <Month monthTransactions={periodSelected} />
      </div>
    </div>
  );
}
