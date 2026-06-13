import BookCover from "./components/BookCover";
import MailLink from "./components/MailLink";
import Newsletter from "./components/Newsletter";

const books = [
  {
    title: "The Salt in Our Hands",
    year: "2024",
    board: "#2c4a3e",
    featured: true,
    blurb:
      "Three sisters return to a drowning stretch of the Norfolk coast to empty their mother's house, and discover that the tide keeps its own version of events. A novel about water, inheritance, and the things a family quietly agrees never to say.",
    note: "the kind of book you finish and immediately press on a friend.",
  },
  {
    title: "The Undertow Year",
    year: "2021",
    board: "#5a2b2b",
    blurb: "A marriage measured out across one long winter beside a cold sea.",
    note: "quiet — and then, all at once, it isn't.",
  },
  {
    title: "Weather for the Birds",
    year: "2018",
    board: "#293450",
    blurb:
      "A widowed ornithologist, a granddaughter who won't come indoors, and a spring that arrives a month too early.",
    note: "I have reread the last chapter three times.",
  },
  {
    title: "A Catalogue of Small Hours",
    year: "2015",
    board: "#39444b",
    blurb: "Twelve linked stories, each set in the hour before the light.",
    note: "her debut — already unmistakably hers.",
  },
];

const praise = [
  {
    quote:
      "Parker writes the sea better than almost anyone alive — and uses it, every time, to get at something true about us.",
    source: "The Saturday Review",
  },
  {
    quote: "Unshowy, unhurried, and quietly devastating.",
    source: "Marlowe & Finch, booksellers",
  },
  {
    quote: "I finished it on the train and then sat there, past my stop.",
    source: "A reader, by post",
  },
];

const nav = [
  { href: "#books", label: "Books" },
  { href: "#about", label: "About" },
  { href: "#praise", label: "Praise" },
  { href: "#desk", label: "The Desk" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ---- Masthead ------------------------------------------------ */}
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-5xl items-baseline justify-between gap-6 px-6 py-3">
          <a
            href="#top"
            className="font-display text-base tracking-tight text-ink"
            style={{ fontWeight: 460 }}
          >
            Daisy&nbsp;Parker
          </a>
          <nav aria-label="Primary" className="hidden sm:block">
            <ul className="flex gap-5 sm:gap-7">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="label transition-colors hover:text-bottle"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* ---- Hero: a thesis, set as an opening line ------------------ */}
      <section id="top" className="border-b border-line">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_13rem] lg:gap-12">
            <div className="max-w-[40rem]">
              <p className="label rise rise-1 mb-7">Daisy Parker · Novelist</p>
              <h1 className="hero-line rise rise-2 text-ink">
                The tide took the second jetty the year my mother stopped
                speaking, and for a while we let her have the silence — the way
                you let the sea have whatever it asks for.
              </h1>
              <p className="rise rise-3 mt-7 font-mono text-xs uppercase tracking-[0.16em] text-sage">
                Opening line ·{" "}
                <span className="italic normal-case">The Salt in Our Hands</span>
              </p>
              <div className="rise rise-4 mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href="#books"
                  className="bg-bottle px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] text-paper transition-colors hover:bg-bottle-deep"
                >
                  The Books
                </a>
                <a
                  href="#desk"
                  className="border-b border-ink/30 pb-0.5 font-display text-lg text-ink transition-colors hover:border-bottle hover:text-bottle"
                >
                  Letters from the desk →
                </a>
              </div>
            </div>
            <aside className="mt-10 hidden self-end lg:mt-0 lg:block">
              <p className="margin-note">
                Four novels, set mostly along the eroding coasts of eastern
                England. Concerned with water, family, and the long weather of
                grief.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ---- The Books ---------------------------------------------- */}
      <section id="books" className="border-b border-line bg-paper-2">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <div className="mb-14 flex items-end justify-between gap-6">
            <h2 className="section-title text-ink">The Books</h2>
            <span className="label hidden sm:block">Four novels · 2015—2024</span>
          </div>

          <ul className="flex flex-col gap-16">
            {books.map((b) => (
              <li
                key={b.title}
                className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-[auto_minmax(0,1fr)] lg:grid-cols-[auto_minmax(0,1fr)_11rem]"
              >
                <div className="flex justify-center sm:block">
                  <BookCover
                    title={b.title}
                    year={b.year}
                    board={b.board}
                    size={b.featured ? "lg" : "md"}
                  />
                </div>

                <div className="max-w-[34rem]">
                  {b.featured && (
                    <p className="label mb-2 !text-bottle">Latest</p>
                  )}
                  <h3
                    className="font-display text-ink"
                    style={{
                      fontSize: b.featured ? "2rem" : "1.6rem",
                      fontWeight: 440,
                      lineHeight: 1.1,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {b.title}
                    <span className="ml-3 align-middle font-mono text-sm tracking-widest text-sage">
                      {b.year}
                    </span>
                  </h3>
                  <p className="mt-4 text-ink-soft">{b.blurb}</p>
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                    <MailLink className="border-b border-ink/25 pb-0.5 text-sm text-ink transition-colors hover:border-bottle hover:text-bottle">
                      Find a copy
                    </MailLink>
                    <MailLink
                      subject="Reading group guide"
                      className="border-b border-ink/25 pb-0.5 text-sm text-ink transition-colors hover:border-bottle hover:text-bottle"
                    >
                      Reading-group guide
                    </MailLink>
                  </div>
                </div>

                <p className="margin-note self-center lg:self-start lg:pt-1">
                  {b.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- About --------------------------------------------------- */}
      <section id="about" className="border-b border-line">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <div className="grid gap-12 md:grid-cols-[15rem_minmax(0,1fr)] md:gap-16">
            {/* Portrait placeholder — a clothbound plate with initials. */}
            <div className="mx-auto w-full max-w-[15rem]">
              <div className="cloth flex aspect-[3/4] items-center justify-center">
                <span className="foil text-5xl" style={{ fontWeight: 420 }}>
                  DP
                </span>
              </div>
              <p className="label mt-3 text-center">Portrait — to come</p>
            </div>

            <div>
              <h2 className="section-title mb-6 text-ink">About Daisy</h2>
              <div className="max-w-[38rem] space-y-4 text-ink-soft">
                <p>
                  Daisy Parker is the author of four novels. Her work is set
                  mostly along the eroding coasts of eastern England, and
                  returns again and again to water — what it takes, what it
                  gives back changed, and the long weather of grief that follows
                  a family from one tide to the next.
                </p>
                <p>
                  Her debut,{" "}
                  <span className="italic">A Catalogue of Small Hours</span>,
                  began as a sequence of stories written in the hour before her
                  shift at a Cromer bookshop. Three novels later,{" "}
                  <span className="italic">The Salt in Our Hands</span> was named
                  a book of the year by readers and booksellers alike.
                </p>
                <p>
                  She lives on the Norfolk coast and writes in a shed that
                  floods, dependably, twice a year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Praise -------------------------------------------------- */}
      <section id="praise" className="border-b border-line bg-bottle text-paper">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <p className="label mb-12 !text-foil/80">Praise</p>
          <ul className="grid gap-12 md:grid-cols-3">
            {praise.map((p) => (
              <li key={p.source}>
                <blockquote className="font-display text-xl leading-snug text-paper sm:text-2xl">
                  “{p.quote}”
                </blockquote>
                <cite className="mt-5 block font-mono text-[0.72rem] uppercase not-italic tracking-[0.16em] text-foil/80">
                  {p.source}
                </cite>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- The Desk: book clubs + newsletter ----------------------- */}
      <section id="desk" className="border-b border-line">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <div className="grid gap-14 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="section-title mb-5 text-ink">For book clubs</h2>
              <p className="max-w-md text-ink-soft">
                Every novel comes with a reading-group guide — discussion
                questions, a note on where the book began, and, more often than
                not, a recipe. They’re free. Write to{" "}
                <MailLink
                  subject="Reading group guide"
                  className="border-b border-ink/30 text-ink transition-colors hover:border-bottle hover:text-bottle"
                />{" "}
                and tell me which one.
              </p>
            </div>

            <div>
              <h2 className="section-title mb-5 text-ink">
                Letters from the desk
              </h2>
              <p className="mb-6 max-w-md text-ink-soft">
                A few times a year: a new book, a reading nearby, the occasional
                thing learned the hard way. No more often than the tide turns
                worth mentioning.
              </p>
              <Newsletter />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Footer -------------------------------------------------- */}
      <footer
        className="cloth text-paper"
        style={{ ["--board" as string]: "#1d3328" }}
      >
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-2xl" style={{ fontWeight: 440 }}>
                Daisy Parker
              </p>
              <MailLink className="mt-2 inline-block font-mono text-sm text-foil/85 transition-colors hover:text-foil" />
            </div>
            <nav aria-label="Elsewhere">
              <ul className="flex gap-6">
                {["Instagram", "Bluesky", "Goodreads"].map((s) => (
                  <li key={s}>
                    <MailLink className="font-mono text-xs uppercase tracking-[0.16em] text-paper/70 transition-colors hover:text-foil">
                      {s}
                    </MailLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-paper/15 pt-6 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-paper/55 sm:flex-row sm:justify-between">
            <span>© 2026 Daisy Parker</span>
            <span>Set in Fraunces &amp; Newsreader</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
