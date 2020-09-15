import http from "../http-common";

const findAllDates = () => {
  http.get("/dates");
};

const getTransactionByPeriod = (period) => {
  http.get(`/byperiod/${period}`);
};

const createTransaction = (data) => {
  http.post("/create", data);
};

const deleteTransaction = (id) => {
  http.delete(`/delete/${id}`);
};

const updateTransaction = (id, data) => {
  http.put(`/update/${id}`, data);
};
