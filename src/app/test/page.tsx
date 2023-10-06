"use client";
import Image from "next/image";
import NavProgressIndicator from "../../components/ProgressIndicators/NavProgressIndicator";
import { useState } from "react";

type Steps = 1 | 2 | 3 | 4 | 5;

export default function Home() {
  const [currentStep, setCurrentStep] = useState<Steps>(1);

  return (
    <div className="flex bg-white">
      <NavProgressIndicator currentStep={1} />
      <div className="flex flex-col w-[80%]">
        <header className="col-start-2 row-span-1 row-start-1 pb-8 border-b-2 border-black border-solid">
          <h1 className="ml-16 mt-16 text-4xl text-black font-semibold">
            Foot and Handprint Calculator
          </h1>
          <h2 className="ml-16 text-2xl text-black">Medewerkers</h2>
        </header>
        <main className="flex flex-col items-center justify-between p-24 h-full"></main>
      </div>
    </div>
  );
}
