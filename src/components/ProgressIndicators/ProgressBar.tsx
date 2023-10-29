import * as Progress from "@radix-ui/react-progress";

interface Props {
  currentProgress: number;
  label: string;
}

export default function ProgressBar(props: Props) {
  return (
    <>
    <span className={`text-lg ${props.label == "Medewerkers" ? "" : "mt-6"}`}>{props.label}</span>
    <div className="flex mt-1">
      <Progress.Root
        className="bg-blackA2 relative h-6 w-4/5 overflow-hidden rounded-full"
        aria-label={`${props.label} progressbar`}
        style={{
          // Fix overflow clipping in Safari
          // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
          transform: "translateZ(0)",
        }}
        value={props.currentProgress}
      >
        <Progress.Indicator
          className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] h-full w-full bg-violet11 transition-transform duration-[660ms]"
          style={{ transform: `translateX(-${100 - props.currentProgress}%)` }}
        />
      </Progress.Root>
      <span className="mx-4">{props.currentProgress}%</span>
    </div>
    </>
  );
}
