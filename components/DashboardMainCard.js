import React, { useEffect, useState } from "react";

export const DashboardMainCard = ({ transactions = [] }) => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const formattedDateCapitalized =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

    setCurrentDate(formattedDateCapitalized);
  }, []);

  const calculateBalance = (transactions) => {
    return transactions.reduce((total, transaction) => {
      const amount = parseFloat(transaction.amount);
      if (transaction.description === "Transferência") {
        return total - amount;
      } else if (transaction.description === "Depósito") {
        return total + amount;
      }
      return total;
    }, 0);
  };

  const balance = calculateBalance(transactions);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(amount);
  };

  return (
    <div className="flex flex-col h-full mx-12 lg:mx-2.5 bg-[#1B263B] text-[#E0E1DD] rounded-xl">
      <div className="flex flex-col p-8 space-y-8">
        <div className="text-3xl lg:text-4xl">Olá, Thomas! :)</div>
        <div className="text-xl">{currentDate}</div>
      </div>
      <div className="flex flex-col ml-auto mr-12 lg:mr-20 space-y-5 mt-16 mb-12">
        <div className="text-2xl lg:text-3xl">Saldo</div>
        <span className="h-[2px] bg-[#778DA9]"></span>
        <div className="text-xl lg:text-2xl">Conta Corrente</div>
        <div className="text-3xl lg:text-5xl">{formatCurrency(balance)}</div>
      </div>
    </div>
  );
};
