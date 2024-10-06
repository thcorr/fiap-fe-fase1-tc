// /utils/transactionService.js

const API_URL = "/api/transactions";

// Fetch all transactions
export const fetchTransactions = async () => {
  const res = await fetch(API_URL, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch transactions");
  }

  return res.json();
};

// Create a new transaction
export const createTransaction = async (newTransaction) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTransaction),
  });

  if (!res.ok) {
    throw new Error("Failed to create transaction");
  }

  return res.json(); // Return the newly created transaction
};

// Update an existing transaction
export const updateTransaction = async (updatedTransaction) => {
  const res = await fetch(API_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTransaction),
  });

  if (!res.ok) {
    throw new Error("Failed to update transaction");
  }

  return res.json(); // Return the updated transaction
};

// Delete transactions
export const deleteTransactions = async (transactionIds) => {
  const res = await fetch(API_URL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ids: transactionIds }),
  });

  if (!res.ok) {
    throw new Error("Failed to delete transactions");
  }

  return res.ok; // Return true if deletion was successful
};

// Add transaction to the list
export const addTransaction = (newTransaction, setTransactions) => {
  return createTransaction(newTransaction)
    .then((createdTransaction) => {
      setTransactions((prevTransactions) => [
        ...prevTransactions,
        createdTransaction,
      ]);
    })
    .catch((error) => {
      console.error("Error creating transaction:", error);
    });
};

// Handle updating a transaction in the list
export const handleUpdateTransaction = (
  updatedTransaction,
  setTransactions
) => {
  return updateTransaction(updatedTransaction)
    .then((updatedData) => {
      setTransactions((prevTransactions) =>
        prevTransactions.map((transaction) =>
          transaction.id === updatedData.id ? updatedData : transaction
        )
      );
    })
    .catch((error) => {
      console.error("Error updating transaction:", error);
    });
};

// Handle deleting transactions from the list
export const handleDeleteTransactions = (transactionIds, setTransactions) => {
  return deleteTransactions(transactionIds)
    .then((success) => {
      if (success) {
        setTransactions((prevTransactions) =>
          prevTransactions.filter(
            (transaction) => !transactionIds.includes(transaction.id)
          )
        );
      }
    })
    .catch((error) => {
      console.error("Error deleting transactions:", error);
    });
};
