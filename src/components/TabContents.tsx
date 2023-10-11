import * as Tabs from "@radix-ui/react-tabs";
import Medewerkers from "./PageComponents/Medewerkers";
import HomePage from "./PageComponents/HomePage/HomePage";
import Profile from "./PageComponents/Profile";

interface Props {
  medewerkersProgress: number;
  leveranciersProgress: number;
  omgevingProgress: number;
  aandeelhoudersProgress: number;
  klantenProgress: number;
  setMedewerkersProgress: (value: number) => void;
  setLeveranciersProgress: (value: number) => void;
  setOmgevingProgress: (value: number) => void;
  setAandeelhoudersProgress: (value: number) => void;
  setKlantenProgress: (value: number) => void;
}

export default function TabContents(props: Props) {
  return (
    <>
      <Tabs.Content
        className="grow rounded-b-xl bg-white p-5 outline-none"
        value="home"
      >
        <HomePage
          medewerkersProgress={props.medewerkersProgress}
          leveranciersProgress={props.leveranciersProgress}
          omgevingProgress={props.omgevingProgress}
          aandeelhoudersProgress={props.aandeelhoudersProgress}
          klantenProgress={props.klantenProgress}
        />
      </Tabs.Content>
      <Tabs.Content
        className="grow rounded-b-xl bg-white p-5 outline-none"
        value="medewerkers"
      >
        <Medewerkers progressUpdater={props.setMedewerkersProgress} />
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
    </>
  );
}
