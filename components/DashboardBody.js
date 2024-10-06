"use client";
import { useEffect, useState } from "react";
import { DashboardMainCard } from "./DashboardMainCard";
import { DashboardExtrato } from "./DashboardExtrato";
import { DashboardNovaTransacao } from "./DashboardNovaTransacao";
import {
  fetchTransactions,
  addTransaction,
  handleUpdateTransaction,
  handleDeleteTransactions,
} from "../utils/transactionService";

export default function DashboardBody() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const fetchedTransactions = await fetchTransactions();
        setTransactions(fetchedTransactions);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setLoading(false);
      }
    };

    loadTransactions();
  }, []);

  const onAddTransaction = async (newTransaction) => {
    await addTransaction(newTransaction, setTransactions);
  };

  const onUpdateTransaction = async (updatedTransaction) => {
    await handleUpdateTransaction(updatedTransaction, setTransactions);
  };

  const onDeleteTransactions = async (transactionIds) => {
    await handleDeleteTransactions(transactionIds, setTransactions);
  };

  return (
    <div className="bg-[#E0E1DD] h-screen overflow-y-auto">
      <div className="flex bg-[#E0E1DD] h-screen">
        <div className="flex flex-col w-full min-w-[600px]">
          <div className="w-full mt-2.5 h-1/2 lg:h-1/2">
            <DashboardMainCard transactions={transactions} />
          </div>
          <div className="w-full mt-2.5 h-1/3 lg:h-1/2 mb-2">
            <DashboardNovaTransacao onAddTransaction={onAddTransaction} />
          </div>
          <div className="lg:hidden mx-12 h-1/3 mb-8">
            <DashboardExtrato
              transactions={transactions}
              loading={loading}
              onDeleteTransactions={onDeleteTransactions}
              onUpdateTransaction={onUpdateTransaction}
            />
          </div>
        </div>
        <div className="hidden lg:block mt-2.5 mr-32 mb-2.5">
          <DashboardExtrato
            transactions={transactions}
            loading={loading}
            onDeleteTransactions={onDeleteTransactions}
            onUpdateTransaction={onUpdateTransaction}
          />
        </div>
      </div>
    </div>
  );
}
