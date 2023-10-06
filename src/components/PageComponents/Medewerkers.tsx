interface Props {
  progressUpdater: (value: number) => void;
}

export default function Medewerkers(props: Props) {
  return (
    <>
      <h3>Medewerkers</h3>
      <button onClick={() => {props.progressUpdater(70)}}>test</button>
    </>
  );
}
