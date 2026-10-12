import Link from "next/link";
import { COUNT_WORDS, LEDGER } from "@/lib/ledger";

/*
 * The chapters of the home page. Server components: static, semantic markup
 * that the scrollcraft engine drives through data-sc-* attributes. Every
 * paragraph is taken from the two published stories or the role bullets.
 */

const READ_LABEL = "Read the story";

function Intertitle({
  numeral,
  title,
  deck,
  id,
}: {
  numeral: string;
  title: string;
  deck: string;
  id: string;
}) {
  return (
    <header className="intertitle" id={id}>
      <div className="ed-wrap ed-grid">
        <p className="intertitle__num sc-display" aria-hidden="true">
          {numeral}
        </p>
        <div className="intertitle__text sc-stack" data-sc-in data-sc-stagger="80">
          <h2 id={`${id}-title`} className="intertitle__title sc-display sc-display--lg">
            <span className="sr-only">Chapter {numeral}. </span>
            {title}
          </h2>
          <p className="intertitle__deck sc-lede">{deck}</p>
        </div>
      </div>
    </header>
  );
}

function Facts({ rows }: { rows: Array<[string, string]> }) {
  return (
    <dl className="facts" data-sc-in data-sc-stagger="50">
      {rows.map(([k, v]) => (
        <div className="facts__row" key={k}>
          <dt>{k}</dt>
          <dd className="sc-nums">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ------------------------------------------------------------ title page */

export function TitlePage() {
  return (
    <section className="title ground--canvas" data-chapter="" aria-labelledby="title-h1">
      <div className="ed-wrap ed-grid title__grid">
        <p className="title__mast" data-sc-in>
          Tap Suksumrun. Associate Technical Product Manager, Omise.
        </p>
        <h1 id="title-h1" className="title__h1 sc-display sc-display--xl" data-sc-in data-sc-stagger="90">
          <span className="title__line">Regulated complexity,</span>
          <span className="title__line">turned into decisions</span>
          <span className="title__line">that hold.</span>
        </h1>
        <p className="title__deck sc-lede" data-sc-in>
          A product manager&rsquo;s record, set as a feature: two fintech stories told in full,
          the role as it stands, the path that led here, and a ledger of every decision along the way.
        </p>
        <nav className="toc" aria-label="Contents" data-sc-in data-sc-stagger="60">
          <p className="toc__label">Contents</p>
          <ol className="toc__list">
            <li>
              <a href="#ch-1">
                <span className="toc__num">I</span>
                <span className="toc__title">The wallet</span>
                <span className="toc__sub">An open-loop wallet under regulator pressure</span>
              </a>
            </li>
            <li>
              <a href="#ch-2">
                <span className="toc__num">II</span>
                <span className="toc__title">The fraud block</span>
                <span className="toc__sub">Shipped, and not turned on</span>
              </a>
            </li>
            <li>
              <a href="#ch-3">
                <span className="toc__num">III</span>
                <span className="toc__title">The role</span>
                <span className="toc__sub">Wallet as a Service at Omise</span>
              </a>
            </li>
            <li>
              <a href="#ch-4">
                <span className="toc__num">IV</span>
                <span className="toc__title">The path</span>
                <span className="toc__sub">Chemical engineering to software delivery</span>
              </a>
            </li>
            <li>
              <a href="#ch-5">
                <span className="toc__num">V</span>
                <span className="toc__title">The ledger</span>
                <span className="toc__sub">Seven decisions, on the record</span>
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- I · the wallet */

export function ChapterWallet({ readingTime }: { readingTime: string }) {
  return (
    <section className="chapter ground--surface" data-chapter="I · The wallet" aria-labelledby="ch-1-title">
      <Intertitle
        id="ch-1"
        numeral="I"
        title="The wallet"
        deck="Integrating an open-loop wallet under regulator pressure."
      />

      <div className="ed-wrap">
        <div className="pull" data-sc-act="flow">
          <div data-sc-reveal="left" data-sc-reveal-at="0.08 0.38">
          <blockquote className="pull__quote sc-display sc-display--md">
            The hardest part wasn&rsquo;t the API. It was the 3pm call on a Friday.
          </blockquote>
          </div>
        </div>
      </div>

      <div className="ed-wrap ed-grid spread spread--lead">
        <aside className="spread__side">
          <Facts
            rows={[
              ["Users", "250,000+"],
              ["Partners", "2"],
              ["Regulator", "1"],
              ["Projected revenue", "~$420K over 3 years"],
              ["Slip", "2 weeks, not 4"],
              ["Reading time", readingTime],
            ]}
          />
        </aside>
        <div className="spread__main prose" data-sc-in data-sc-stagger="70">
          <p>
            We had signed two wallet partners into a program that would eventually serve 250,000+ users
            and generate roughly $420K in projected three-year revenue. On paper, it was an integration
            project. In practice, it was three organisations, us, the partners, and a regulator, moving at
            three different speeds, reading the same requirements three different ways.
          </p>
          <p>
            Partner B wanted to push back launch by a month. Partner A, hearing this, wanted to launch
            without them. I had about twenty minutes to figure out whether that was a real option or a
            panic reaction dressed up as decisiveness.
          </p>
          <p className="decision" data-ledger="1">
            <strong>I stopped trying to align everyone on the answer and started aligning them on the
            question.</strong> Before the call, I wrote a one-page document with three things on it: what
            the regulator had actually said, verbatim; what launching without Partner B would mean for the
            revenue model; and what the minimum viable compliance envelope looked like. No
            recommendations. Just the shape of the decision. The &ldquo;launch without them&rdquo; option
            quietly removed itself from the table without anyone having to lose face.
          </p>
          <p className="decision" data-ledger="2">
            <strong>I then did the harder thing and re-scoped with Partner B live, on the call.</strong>{" "}
            Instead of a month&rsquo;s delay, we found four days of real blockers and three weeks of
            &ldquo;we haven&rsquo;t looked at it yet.&rdquo; We pulled the blockers forward, parked the
            rest, and committed to a two-week slip instead of four.
          </p>
          <p>
            The wallet shipped two weeks late. Nobody remembers the two weeks. They remember that it
            shipped.
          </p>
          <p className="running">
            <Link href="/stories/omise-wallet-integration" className="running__link">
              {READ_LABEL}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------- II · the fraud block */

export function ChapterFraud({ readingTime }: { readingTime: string }) {
  return (
    <section className="chapter ground--canvas" data-chapter="II · The fraud block" aria-labelledby="ch-2-title">
      <Intertitle
        id="ch-2"
        numeral="II"
        title="The fraud block"
        deck="The fraud block we shipped and didn't turn on."
      />

      <div className="ed-wrap ed-grid spread spread--trail">
        <aside className="spread__side spread__side--sticky">
          {/* Three stacked switches, driven by the chapter's own scroll progress
              (--sc-p). They flip on in build order, all three light for the
              production test, then enforce and lock go dark again, because
              today only observe is on. Decorative: the prose says the same. */}
          <div className="ladder" data-state="off" aria-hidden="true">
            <p className="ladder__label">The switches</p>
            <ul className="ladder__list">
              <li className="ladder__row ladder__row--observe">
                <span className="ladder__switch">
                  <span className="ladder__knob" />
                </span>
                <span className="ladder__name">observe</span>
                <span className="ladder__state" />
              </li>
              <li className="ladder__row ladder__row--enforce">
                <span className="ladder__switch">
                  <span className="ladder__knob" />
                </span>
                <span className="ladder__name">enforce</span>
                <span className="ladder__state" />
              </li>
              <li className="ladder__row ladder__row--lock">
                <span className="ladder__switch">
                  <span className="ladder__knob" />
                </span>
                <span className="ladder__name">lock</span>
                <span className="ladder__state" />
              </li>
            </ul>
          </div>
          <Facts
            rows={[
              ["Users", "250,000+ across 2 wallets"],
              ["Build", "20 days"],
              ["Around it", "6 months"],
              ["Switches", "3"],
              ["On today", "observe"],
              ["Reading time", readingTime],
            ]}
          />
        </aside>

        <div className="spread__main">
          <blockquote className="pull__quote pull__quote--inline sc-display sc-display--md" data-sc-in>
            We scanned the QR twice. The second screen was the one nobody had designed.
          </blockquote>
          <div className="prose" data-sc-in data-sc-stagger="70">
            <p>
              Mule accounts are real people&rsquo;s accounts, rented or sold to a fraud ring to move
              stolen money. In 2026 the Bank of Thailand made every e-money issuer responsible for
              screening its own users against the published lists, not just the banks.
            </p>
            <p>
              The gap was time. A scan at nine in the morning tells you who is on the list. At 9:42 one
              of them scans a merchant QR and the payment goes through, because the payment path has no
              idea the scan happened.
            </p>
            <p className="decision" data-ledger="3">
              <strong>The check lives where the money moves.</strong> Screening happens inside the
              payment, on every payment, on every partner wallet. Twenty days of build, they said, once
              one blocker cleared. The code was twenty days. The identity problem underneath it took two
              months and most of the people in the building.
            </p>
            <p className="decision" data-ledger="4">
              <strong>Block by machine, terminate by human.</strong> A match stops a payment. Only
              compliance ends a relationship, because the list can be wrong and a termination can&rsquo;t
              be undone quietly. Fourteen people sharing a full Thai name is not a coincidence.
              That&rsquo;s a data problem.
            </p>
            <p data-ladder="built">
              We built it dark. The integration sits behind three stacked switches: observe, enforce,
              lock. Observe calls the screening service on every payment and records the answer. Enforce
              turns a match into a declined payment. Lock, on top of enforce, freezes the card in the
              same action as the decline, so a flagged customer can&rsquo;t simply retry.
            </p>
            <p data-ladder="test">
              Last week our QA lead and I ran a real scan in production with a flagged test account and
              all three switches on. Scan one: a generic &ldquo;cannot process payment.&rdquo; Scan two:
              the partner&rsquo;s account-locked screen, because our lock had fired on the first try. The
              log said one clean rejection. The customer would have seen two different screens, and
              nobody had designed the second one.
            </p>
            <p data-ladder="live">
              Today only observe is on. Every payment is screened and logged, nothing is blocked,
              nothing is locked. I read the log. The switch goes on in October, when someone on each
              partner&rsquo;s support desk knows what to say.
            </p>
            <p>
              The code took twenty days. Everything around it took six months, and most of that was
              meetings where I was wrong about something.
            </p>
            <p className="running">
              <Link href="/stories/wallet-blackwatch-integration" className="running__link">
                {READ_LABEL}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- III · the role */

export function ChapterRole() {
  return (
    <section className="chapter ground--surface" data-chapter="III · The role" aria-labelledby="ch-3-title">
      <Intertitle
        id="ch-3"
        numeral="III"
        title="The role"
        deck="Associate Technical Product Manager at Omise since June 2026, leading Wallet as a Service: strategy, roadmap and execution across product, engineering and partner teams."
      />

      <div className="ed-wrap">
        <div className="figures" data-sc-in data-sc-stagger="80">
          <div className="figure">
            <p className="figure__n sc-display sc-display--lg">
              <span data-sc-count="0 100" data-sc-count-ms="1500">0</span>M
            </p>
            <p className="figure__l">THB of e-money float protected by funding the wallet as a platform</p>
          </div>
          <div className="figure">
            <p className="figure__n sc-display sc-display--lg">
              <span data-sc-count="0 62" data-sc-count-ms="1500">0</span>
            </p>
            <p className="figure__l">launch tickets decomposed in the partner-onboarding analysis</p>
          </div>
          <div className="figure">
            <p className="figure__n sc-display sc-display--lg">
              <span data-sc-count="0 30" data-sc-count-ms="1500">0</span>
            </p>
            <p className="figure__l">code sites, across 4 of 22 services, carrying the recurring cost</p>
          </div>
          <div className="figure">
            <p className="figure__n sc-display sc-display--lg">
              <span data-sc-count="0 250,000" data-sc-count-ms="1700">0</span>+
            </p>
            <p className="figure__l">wallet users screened in real time under the Bank of Thailand mandate</p>
          </div>
        </div>
      </div>

      <div className="ed-wrap ed-grid spread spread--offset">
        <div className="spread__main prose" data-sc-in data-sc-stagger="70">
          <p className="decision" data-ledger="5">
            <strong>Defined the Wallet-as-a-Service product strategy.</strong> Ran six stakeholder
            interviews and a cross-functional strategy workshop that secured leadership consensus to
            fund the wallet as a platform rather than project by project, protecting about THB 100M of
            e-money float and setting the personal-loan vertical as the near-term growth focus.
          </p>
          <p>
            Authored the vision, value proposition, strategy, outcomes and roadmap package behind the
            Q4 2026 budget ask, structured as three separately funded streams (Run, Deliver,
            Productize) so platform work is never squeezed into delivery deadlines.
          </p>
          <p className="decision" data-ledger="6">
            <strong>Led a code-evidence &ldquo;80/20&rdquo; analysis of partner onboarding.</strong>{" "}
            Decomposed 62 launch tickets, traced recurring cost to about 30 code sites across 4 of 22
            services, and proposed a plan to cut per-partner engineering from 3 to 4 months to an
            estimated 2 to 4 weeks.
          </p>
          <p>
            Delivered real-time mule-account screening inside the wallet payment flow for 250K+ users
            across two partner wallets, in response to the Bank of Thailand mandate; owned
            requirements, the company&rsquo;s first design-review committee, compliance alignment, and
            a staged observe / enforce / lock rollout.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- IV · the path */

export function ChapterPath() {
  return (
    <section className="chapter chapter--quiet ground--canvas" data-chapter="IV · The path" aria-labelledby="ch-4-title">
      <Intertitle
        id="ch-4"
        numeral="IV"
        title="The path"
        deck="Chemical engineering to software delivery."
      />

      <div className="ed-wrap ed-grid spread spread--narrow">
        <div className="spread__main">
          <ol className="path" data-sc-in data-sc-stagger="40">
            <li className="path__row">
              <span className="path__when sc-nums">2025 to 2026</span>
              <span className="path__what">
                <strong>Project Manager, Omise.</strong> Cross-functional delivery at the Omise Pro
                business unit: a multi-partner digital wallet program serving 250K+ users with about
                $420K projected three-year revenue, the Report Engine plan scoping a $300K annual
                opportunity, and the CYBS REST API rollout for Thai banks that drove about $150K a
                month in savings.
              </span>
            </li>
            <li className="path__row">
              <span className="path__when sc-nums">2020 to 2025</span>
              <span className="path__what">
                <strong>Digital Project Manager, Indorama Ventures PCL.</strong> Data integration of
                Workday&rsquo;s Adaptive Planning module; solution design and data modelling for
                procurement analytics; the COMA app for customer and product profitability; Tableau
                dashboards; vendor partnerships for supply-chain analytics.
              </span>
            </li>
            <li className="path__row">
              <span className="path__when sc-nums">2017 to 2018</span>
              <span className="path__what">
                <strong>Summer analyst, three times.</strong> Finnomena, investment advisory research.
                IRPC, a competing country&rsquo;s export data. Thai Oil, crude prices and product values
                for procurement.
              </span>
            </li>
            <li className="path__row">
              <span className="path__when">Before that</span>
              <span className="path__what">
                <strong>BEng Chemical Engineering, Lancaster University. MSc, Imperial College
                London.</strong>
              </span>
            </li>
            <li className="path__row path__row--decision" data-ledger="7">
              <span className="path__when" aria-hidden="true" />
              <span className="path__what">
                Transitioned from chemical engineering into digital transformation and software
                delivery, and spent the last six years leading projects across fintech and chemicals.
                The thread through all of it: bridging the gap between business needs and technical
                execution, and making the complex feel simple.
              </span>
            </li>
          </ol>
          <p className="path__cv">
            <a href="/resume.pdf" className="running__link">
              The CV, as a PDF
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- V · the ledger (the peak, and the close) */

export function ChapterLedger() {
  // Row cues: one value each, so every stamp holds once it lands. Only the
  // last act may hold, and this is the last act. The intertitle greets.
  const first = 0.1;
  const step = 0.07;
  const lastRow = first + step * (LEDGER.length - 1); // 0.52
  const countAt = (lastRow + 0.12).toFixed(2); // 0.64
  const beliefAt = (lastRow + 0.2).toFixed(2); // 0.72
  const colophonAt = (lastRow + 0.3).toFixed(2); // 0.82

  return (
    <section
      id="ch-5"
      className="chapter chapter--ledger ground--invert"
      data-sc-act="pin"
      data-sc-span="3.4"
      data-chapter="V · The ledger"
      aria-labelledby="ch-5-title"
    >
      <div data-sc-stage className="ledger-stage">
        <div className="ed-wrap ledger-stage__grid">
          <header className="ledger-stage__head" data-sc-cue="0 1 0 0">
            <p className="intertitle__num sc-display" aria-hidden="true">
              V
            </p>
            <h2 id="ch-5-title" className="sc-display sc-display--md">
              <span className="sr-only">Chapter V. </span>The ledger
            </h2>
            <p className="ledger-stage__deck">Seven decisions, in the order you passed them.</p>
          </header>

          <ol className="record" aria-label="The decisions">
            {LEDGER.map((entry, i) => (
              <li
                key={entry.id}
                className="record__row"
                data-sc-cue={(first + step * i).toFixed(2)}
                data-sc-rise="0.5"
              >
                <span className="record__num sc-display">{entry.chapter}</span>
                <span className="record__text">
                  <span className="record__stamp">{entry.stamp}</span>
                  <span className="record__detail">{entry.detail}</span>
                </span>
              </li>
            ))}
          </ol>

          <div className="record__close">
            <p className="record__count sc-display sc-display--md" data-sc-cue={countAt}>
              {COUNT_WORDS[LEDGER.length].replace(/^./, (c) => c.toUpperCase())} decisions on record.
            </p>
            <p className="record__belief sc-lede" data-sc-cue={beliefAt}>
              Regulated complexity, turned into decisions that hold.
            </p>
            <footer className="colophon" data-sc-cue={colophonAt} data-sc-rise="0.5">
              <p>
                {READ_LABEL}:{" "}
                <Link href="/stories/omise-wallet-integration" className="running__link">
                  The wallet
                </Link>
                {" · "}
                <Link href="/stories/wallet-blackwatch-integration" className="running__link">
                  The fraud block
                </Link>
                {" · "}
                <Link href="/stories" className="running__link">
                  All stories
                </Link>
              </p>
              <p>
                Write:{" "}
                <a href="mailto:ratanon97@hotmail.com" className="running__link">
                  ratanon97@hotmail.com
                </a>
                {" · "}
                <a
                  href="https://www.linkedin.com/in/ratanon-suksumrun"
                  className="running__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                {" · "}
                <a href="/resume.pdf" className="running__link">
                  CV (PDF)
                </a>
              </p>
              <p className="colophon__small">
                Set in Playfair Display and Geist. &copy; {new Date().getFullYear()} Tap Suksumrun.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
