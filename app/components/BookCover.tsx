/**
 * A clothbound hardcover rendered entirely in CSS — woven board, foil frame,
 * foil-stamped title. No image assets, and every spine sits in the site's
 * own world of paper and ink.
 */
export default function BookCover({
  title,
  year,
  board,
  size = "md",
}: {
  title: string;
  year: string;
  board: string;
  size?: "md" | "lg";
}) {
  const dims =
    size === "lg"
      ? "w-[180px] h-[270px] sm:w-[210px] sm:h-[315px]"
      : "w-[132px] h-[198px]";

  return (
    <div
      className={`cloth ${dims} flex shrink-0 flex-col items-center justify-center px-5 text-center`}
      style={{ ["--board" as string]: board }}
      aria-hidden="true"
    >
      <span className="label !text-[0.58rem] !text-foil/70">Daisy Parker</span>
      <span
        className={`foil mt-3 leading-[1.06] ${
          size === "lg" ? "text-[1.5rem]" : "text-[1.12rem]"
        }`}
        style={{ fontWeight: 460, letterSpacing: "-0.01em" }}
      >
        {title}
      </span>
      <span className="foil mt-4 text-[0.62rem] tracking-[0.3em] opacity-70">
        {year}
      </span>
    </div>
  );
}
