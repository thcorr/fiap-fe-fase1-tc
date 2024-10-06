"use client";

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between col-span-full bg-[#E0E1DD] text-[#1B263B] h-24 items-center">
      <MenuIcon
        style={{ color: "#1B263B", fontSize: 36 }}
        className="ml-4 cursor-pointer hide-md"
        onClick={toggleMenu}
      />

      <div className="italic text-3xl mr-4 ml-auto md:mr-10 lg:ml-56 md:ml-36">
        SafeBank
      </div>

      <div className="ml-24 text-2xl mr-10 hidden md:flex">
        <ul className="flex space-x-12 font-semibold">
          <li>Sobre</li>
          <li>Serviços</li>
        </ul>
      </div>

      <div className="ml-auto mr-24 space-x-2 hidden md:flex">
        <button className="bg-[#0D1B2A] lg:font-semibold lg:text-xl md:text-base text-[#E0E1DD] md:w-[120px] lg:w-[150px] h-[48px] rounded-[8px] hover:bg-[#778DA9] hover:text-[#1B263B]">
          Abrir conta
        </button>
        <Link href="/dashboard">
          <button className="bg-[#1B263B] opacity-75 lg:font-semibold lg:text-xl md:text-base text-[#E0E1DD] md:w-[120px] lg:w-[150px] h-[48px] rounded-[8px] hover:bg-[#778DA9] hover:text-[#1B263B]">
            Já tenho conta
          </button>
        </Link>
      </div>

      {menuOpen && (
        <div className="absolute top-[96px] left-0 bg-[#E0E1DD] w-[200px] text-[#1B263B] text-xl font-semibold z-20 rounded-lg shadow-lg">
          <ul className="flex flex-col space-y-2 p-3">
            <Link href="/dashboard">
              <li className="hover:bg-[#415A77] p-2 rounded">Já tenho conta</li>
            </Link>
            <li className=" hover:bg-[#415A77] p-2 rounded">Criar Conta</li>
          </ul>
        </div>
      )}
    </div>
  );
};
