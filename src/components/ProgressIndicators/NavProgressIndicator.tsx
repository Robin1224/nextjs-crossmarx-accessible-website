import Image from "next/image";
import circleIcon from "../../../public/circle-icon.svg";

interface Props {
  currentStep: number;
}

const inactiveStyle =
  "w-2.5 h-2.5 hover:w-3 hover:h-3 transition-all duration-200";
const activeStyle = "w-5 h-5";

const altTextGenerator = (step: number, currentStep: number) => {
  return `Progress indicator, step ${step.toString()} of five, ${
    step === currentStep ? "active" : "inactive"
  }`;
};

export default function NavProgressIndicator(props: Props) {
  return (
    <nav className="mt-[5vh] flex h-[90vh] w-48 justify-center border-r-2 border-solid border-black">
      <ul className="flex h-40 w-12 flex-col items-center justify-between rounded-3xl bg-zinc-200 py-4">
        <li className={props.currentStep === 1 ? activeStyle : inactiveStyle}>
          <Image
            src={circleIcon}
            alt={altTextGenerator(1, props.currentStep)}
          />
        </li>
        <li className={props.currentStep === 2 ? activeStyle : inactiveStyle}>
          <Image
            src={circleIcon}
            alt={altTextGenerator(1, props.currentStep)}
          />
        </li>
        <li className={props.currentStep === 3 ? activeStyle : inactiveStyle}>
          <Image
            src={circleIcon}
            alt={altTextGenerator(1, props.currentStep)}
          />
        </li>
        <li className={props.currentStep === 4 ? activeStyle : inactiveStyle}>
          <Image
            src={circleIcon}
            alt={altTextGenerator(1, props.currentStep)}
          />
        </li>
        <li className={props.currentStep === 5 ? activeStyle : inactiveStyle}>
          <Image
            src={circleIcon}
            alt={altTextGenerator(1, props.currentStep)}
          />
        </li>
      </ul>
    </nav>
  );
}
