import {
  FaPeopleGroup,
  FaBoxesStacked,
  FaTreeCity,
  FaPeopleLine,
  FaCreditCard,
  FaHouseChimney,
} from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import * as Tabs from "@radix-ui/react-tabs";
import DisplayName from "./DisplayName";

export default function Navbar() {
  // Universal styles for all tabs
  const triggerStyles: string =
    "text-mauve11 hover:text-violet11 data-[state=active]:text-violet11 flex h-20 flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none outline-none first:rounded-tl-xl last:rounded-tr-xl data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current";

  return (
    <Tabs.List
      className="flex shrink-0 border-b border-mauve6"
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
        <CgProfile className="mr-2 h-8 w-8" />
        {/* FIXME: Name not updating after creating account */}
        <DisplayName />
      </Tabs.Trigger>
    </Tabs.List>
  );
}
