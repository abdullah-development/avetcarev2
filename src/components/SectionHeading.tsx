import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <p className={`eyebrow ${light ? "!text-lime-300" : ""}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-3xl leading-tight font-medium sm:text-5xl ${light ? "!text-white" : ""}`}>{title}</h2>
      {text && <p className={`mt-5 text-lg leading-relaxed ${light ? "text-white/75" : "text-ink-500"}`}>{text}</p>}
    </Reveal>
  );
}
