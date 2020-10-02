import React from "react";
import Day from "./Day";

export default function Month({ monthTransactions }) {
  const transactions = monthTransactions.transactions;
  
  React.useEffect(() => {
    console.log("ouvindo transactions", transactions);
 
  }, [transactions])

  return transactions ? (
    <div style={styles.monthCss}>
      <div>
        {transactions.map((transaction) => {
          return (
            <div key={transaction._id}>
              <Day
                day={transaction.day}
                description={transaction.description}
                category={transaction.category}
                value={transaction.value}
                type={transaction.type}
                _id={transaction._id}
              />
            </div>
          );
        })}
      </div>
    </div>
  ) : null;
}

const styles = {
  monthCss: {
    padding: "10px",
  },
};
