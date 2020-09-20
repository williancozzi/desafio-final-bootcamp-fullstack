import React from "react";
import Day from "./Day";

export default function Month({ monthTransactions }) {
  const transactions = monthTransactions.transactions;

  return (
    <div style={styles.monthCss}>
      Month
      <div>
        {console.log("month", transactions)}
        {transactions?.map((transaction) => {
          return (
            <div key={transaction._id}>
              <Day
                day={transaction.day}
                description={transaction.description}
                category={transaction.category}
                value={transaction.value}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  monthCss: {
    backgroundColor: "#f7f3ce",
    padding: "10px",
  },
};
