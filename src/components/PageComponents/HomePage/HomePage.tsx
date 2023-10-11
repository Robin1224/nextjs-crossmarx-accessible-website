import ProgressBar from "../../ProgressIndicators/ProgressBar";
import AuthButtons from "./AuthButtons";

interface Props {
  medewerkersProgress: number;
  leveranciersProgress: number;
  omgevingProgress: number;
  aandeelhoudersProgress: number;
  klantenProgress: number;
}

export default function HomePage(props: Props) {
  return (
    <>
    <div className="flex h-4/5 items-center justify-center">
      <section className="mx-2 w-1/2 px-12">
        <h1 className="text-center text-3xl font-semibold">
          Handprint/footprint calculator
        </h1>
        <p className="mt-8 text-lg font-light leading-6">
          Welkom bij de handprint / footprint calculator. Kies een categorie
          bovenin de pagina en beantwoord de vragen op basis van jouw bedrijf.
          Er zijn vijf categorieën. Wanneer je de vragen uit iedere categorie
          hebt beantwoord, kun je aan de hand van jouw antwoorden een score
          krijgen van jouw ecologische handprint en footprint, en krijg je
          daarnaast ook toppunten en aandachtspunten om jouw footprint en
          handprint te verbeteren.
        </p>
        <AuthButtons />
      </section>
      <section className="flex flex-col justify-center mx-2 pl-8 h-full w-1/2 rounded-lg bg-mauve2">
        <h3 className="text-2xl font-semibold mb-4">Progressie</h3>
        <ProgressBar label="Medewerkers" currentProgress={props.medewerkersProgress}/>
        <ProgressBar label="Leveranciers" currentProgress={props.leveranciersProgress} />
        <ProgressBar label="Omgeving" currentProgress={props.omgevingProgress} />
        <ProgressBar label="Aandeelhouders" currentProgress={props.aandeelhoudersProgress} />
        <ProgressBar label="Klanten" currentProgress={props.klantenProgress} />
      </section>
    </div>
    <div className="flex justify-center items-center w-full h-24 mt-8">
      <button disabled className="bg-violet6 disabled:bg-mauve5 disabled:cursor-not-allowed px-8 py-4 rounded-full">Bereken mijn resultaten</button>
    </div>
    </>
  );
}
