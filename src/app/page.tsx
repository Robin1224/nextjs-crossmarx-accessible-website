"use client";

import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Medewerkers from "../components/PageComponents/Medewerkers";
import HomePage from "../components/PageComponents/HomePage/HomePage";
import Profile from "../components/PageComponents/Profile";
import {
  FaPeopleGroup,
  FaBoxesStacked,
  FaTreeCity,
  FaPeopleLine,
  FaCreditCard,
  FaHouseChimney,
} from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { useAuthContext } from "@/src/context/AuthContext";
import { User } from "firebase/auth";

export default function Home() {
  // TODO: Replace these with actual values
  const [medewerkersProgress, setMedewerkersProgress] = useState<number>(13);
  const [leveranciersProgress, setLeveranciersProgress] = useState<number>(30);
  const [omgevingProgress, setOmgevingProgress] = useState<number>(60);
  const [aandeelhoudersProgress, setAandeelhoudersProgress] = useState<number>(97);
  const [klantenProgress, setKlantenProgress] = useState<number>(100);

  // Getting user from context
  const user: User | null = useAuthContext();

  // if (user != null) { console.log(user); }

  // Universal styles for all tabs
  const triggerStyles: string =
    "text-mauve11 hover:text-violet11 data-[state=active]:text-violet11 flex h-20 flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none outline-none first:rounded-tl-xl last:rounded-tr-xl data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current";

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Tabs.Root
        className="shadow-blackA2 flex h-[90vh] w-[90vw] flex-col shadow-[0_2px_10px]"
        defaultValue="home"
      >
        {/* ---- Tabs ---- */}
        <Tabs.List
          className="border-mauve6 flex shrink-0 border-b"
          aria-label="Selecteer een categorie"
        >
          <Tabs.Trigger className={triggerStyles} value="home">
            <FaHouseChimney className="mr-2" /> Home
          </Tabs.Trigger>
          <Tabs.Trigger className={triggerStyles} value="medewerkers">
            <FaPeopleGroup className="mr-2" /> Medewerkers
          </Tabs.Trigger>
          <Tabs.Trigger className={triggerStyles} value="leveranciers">
            <FaBoxesStacked className="mr-2" /> Leveranciers
          </Tabs.Trigger>
          <Tabs.Trigger className={triggerStyles} value="omgeving">
            <FaTreeCity className="mr-2" /> Omgeving
          </Tabs.Trigger>
          <Tabs.Trigger className={triggerStyles} value="aandeelhouders">
            <FaPeopleLine className="mr-2" /> Aandeelhouders
          </Tabs.Trigger>
          <Tabs.Trigger className={triggerStyles} value="klanten">
            <FaCreditCard className="mr-2" /> Klanten
          </Tabs.Trigger>
          <Tabs.Trigger className={triggerStyles} value="profile">
            <CgProfile className="mr-2 w-8 h-8" />
            <span>
              {/* FIXME: Name not updating when logging in */}
              {user != null ? user.displayName : "Profiel"}
              </span>
          </Tabs.Trigger>
        </Tabs.List>

        {/* ---- Tab contents ---- */}
        <Tabs.Content
          className="grow rounded-b-xl bg-white p-5 outline-none"
          value="home"
        >
          <HomePage 
            medewerkersProgress={medewerkersProgress}
            leveranciersProgress={leveranciersProgress}
            omgevingProgress={omgevingProgress}
            aandeelhoudersProgress={aandeelhoudersProgress}
            klantenProgress={klantenProgress}
          />
        </Tabs.Content>
        <Tabs.Content
          className="grow rounded-b-xl bg-white p-5 outline-none"
          value="medewerkers"
        >
          <Medewerkers progressUpdater={setMedewerkersProgress} />
        </Tabs.Content>
        <Tabs.Content
          className="grow rounded-b-xl bg-white p-5 outline-none"
          value="leveranciers"
        >
          <h3>test leveranciers</h3>
        </Tabs.Content>
        <Tabs.Content
          className="grow rounded-b-xl bg-white p-5 outline-none"
          value="profile"
        >
          <Profile />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
