import React from "react";
import axios from "axios";
import Select from "./components/Select";

const api = axios.create({ baseURL: "api" });

export default function App() {
  const [transactions, setTransactions] = React.useState([]);
  const [dates, setDates] = React.useState([]);

  React.useEffect(() => {
    const fetchTransactions = async () => {
      const { data } = await api.get("/transaction/dates");

      setDates(data);
    };

    fetchTransactions();
  }, []);

  return (
    <div className="container">
      <h1 className="center">Desafio Final do Bootcamp Full Stack</h1>
      <Select dates={dates} />
    </div>
  );
}
