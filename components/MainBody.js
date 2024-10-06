import React from "react";
import Image from "next/image";

export const MainBody = () => {
  return (
    <div className="flex flex-col items-center h-[83vh] bg-[#778DA9] ">
      <div className="flex flex-col lg:flex-row w-full space-x-45 lg:mt-0 lg:items-center">
        <p className="mr-auto ml-10 mt-10 md:mt-20 font-semibold text-center text-4xl lg:text-6xl lg:w-1/2">
          Guarde seu dinheiro e aumente seu patrimônio de forma segura. Crie sua
          conta com a gente!
        </p>
        <div className="mx-auto md:w-[600px] md:h-[400px] w-[280px] h-[220px] relative mt-14 rounded-3xl overflow-hidden">
          <Image
            src="/images/safeBankLogo.png"
            alt="SafeBank Logo"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="font-semibold md:text-4xl text-3xl mt-12 lg:mt-32">
        Vantagens do nosso banco:
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full lg:mt-20 mt-10 px-10 text-center">
        <div className="p-5">
          <h3 className="font-bold lg:text-3xl text-2xl">
            Conta e cartão gratuitos
          </h3>
          <p className="mt-2 text-[#E0E1DD] text-xl lg:text-2xl">
            Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso:
            sem tarifa de manutenção.
          </p>
        </div>
        <div className="p-5">
          <h3 className="font-bold lg:text-3xl text-2xl ">Saques sem custo</h3>
          <p className="mt-2 text-[#E0E1DD] text-xl lg:text-2xl">
            Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.
          </p>
        </div>
        <div className="p-5">
          <h3 className="font-bold lg:text-3xl text-2xl">Programa de pontos</h3>
          <p className="mt-2 text-[#E0E1DD] text-xl lg:text-2xl">
            Você pode acumular pontos com suas compras no crédito sem pagar
            mensalidade!
          </p>
        </div>
        <div className="p-5">
          <h3 className="font-bold lg:text-3xl text-2xl">
            Seguro Dispositivos
          </h3>
          <p className="mt-2 text-[#E0E1DD] text-xl lg:text-2xl">
            Seus dispositivos móveis (computador e laptop) protegidos por uma
            mensalidade simbólica.
          </p>
        </div>
      </div>
    </div>
  );
};
