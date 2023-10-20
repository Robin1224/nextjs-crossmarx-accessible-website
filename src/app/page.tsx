"use client";

import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Navbar from "../components/Navbar";
import TabContents from "../components/TabContents";

export default function Home() {
  // TODO: Replace these with actual values
  const [medewerkersProgress, setMedewerkersProgress] = useState<number>(13);
  const [leveranciersProgress, setLeveranciersProgress] = useState<number>(30);
  const [omgevingProgress, setOmgevingProgress] = useState<number>(60);
  const [aandeelhoudersProgress, setAandeelhoudersProgress] = useState<number>(97);
  const [klantenProgress, setKlantenProgress] = useState<number>(100);

  return (
    // Container required for proper layout
    <div className="flex h-screen w-screen items-center justify-center">
      <Tabs.Root
        className="shadow-blackA2 flex h-[90vh] w-[90vw] flex-col shadow-[0_2px_10px]"
        defaultValue="home"
      >
        {/* ---- Tabs ---- */}
        <Navbar />

        {/* ---- Tab contents ---- */}
        <TabContents 
          medewerkersProgress={medewerkersProgress}
          leveranciersProgress={leveranciersProgress}
          omgevingProgress={omgevingProgress}
          aandeelhoudersProgress={aandeelhoudersProgress}
          klantenProgress={klantenProgress}
          setMedewerkersProgress={setMedewerkersProgress}
          setLeveranciersProgress={setLeveranciersProgress}
          setOmgevingProgress={setOmgevingProgress}
          setAandeelhoudersProgress={setAandeelhoudersProgress}
          setKlantenProgress={setKlantenProgress}
        />
      </Tabs.Root>
    </div>
  );
}
