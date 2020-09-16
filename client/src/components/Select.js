import React from "react";

export default function Select({ dates }) {
  return (
    <div>
      <select className="browser-default">
        <option defaultValue disabled>
          Escolha a data
        </option>
        {dates.map((date, index) => {
          return <option key={index}>{date}</option>;
        })}
      </select>
    </div>
  );
}

{
  /* {transactions.map((transaction) => {
        return <p key={transaction._id}>{transaction.yearMonth}</p>;
      })} */
}
