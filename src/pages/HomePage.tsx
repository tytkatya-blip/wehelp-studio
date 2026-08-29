import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const problems = [
  {
    title: 'Too much work is still manual.',
    body: 'Your team spends hours copying, checking, updating or chasing things that software could handle.',
  },
  {
    title: "Your tools don't work together.",
    body: 'Information lives across spreadsheets, inboxes, CRM, CMS and internal systems.',
  },
  {
    title: 'Revenue falls through the cracks.',
    body: 'Leads go cold, follow-ups get missed and existing customer data stays unused.',
  },
  {
    title: 'You have data, but not visibility.',
    body: 'People spend time finding out what is happening instead of acting on it.',
  },
  {
    title: 'Growth requires more people.',
    body: 'More customers or transactions create proportionally more operational work.',
  },
]

const outcomes = [
  {
    title: 'Make more.',
    lines: ['More leads converted.', 'More customers reactivated.', 'Fewer opportunities lost.'],
  },
  {
    title: 'Waste less.',
    lines: ['Less manual work.', 'Fewer errors and duplicated tasks.', 'Lower administrative overhead.'],
  },
  {
    title: 'Operate better.',
    lines: [
      'Handle more without growing the team at the same rate.',
      'Move faster.',
      'See what is happening.',
    ],
  },
]

const process = [
  {
    title: 'Understand',
    body: 'We learn how the work actually happens — people, tools, data and constraints.',
  },
  {
    title: 'Find the money',
    body: 'We identify where revenue, time or capacity is being lost.',
  },
  {
    title: 'Quantify',
    body: 'We establish the baseline and build the business case.',
  },
  {
    title: 'Design the fix',
    body: 'We choose the simplest solution capable of creating the impact.',
  },
  {
    title: 'Implement',
    body: 'We build, configure and integrate it into the real workflow.',
  },
  {
    title: 'Measure',
    body: 'We launch with users, remove friction and measure what changed.',
  },
]

const capabilities = [
  {
    title: 'AI',
    body: 'Extraction, classification, drafting, search, copilots and decision support.',
  },
  {
    title: 'Automation & integrations',
    body: 'CRM, email, CMS, payments, forms, documents and APIs.',
  },
  {
    title: 'Custom software',
    body: 'Internal tools, portals, dashboards and workflow applications.',
  },
  {
    title: 'Product & interface design',
    body: 'Tools employees and customers can actually use.',
  },
  {
    title: 'Backend & data',
    body: 'Business logic, migrations, permissions and reliable integrations.',
  },
  {
    title: 'Existing SaaS',
    body: 'When an existing product solves the problem better, we use it.',
  },
]

const principles = [
  ['Business first', 'Start with impact, not technology.'],
  ['End to end', 'From understanding the problem to production.'],
  ['Technology agnostic', 'Build only when building makes sense.'],
  ['Production minded', "A recommendation that never gets used isn't a solution."],
]

export function HomePage() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const observer = reducedMotion
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible')
                observer?.unobserve(entry.target)
              }
            })
          },
          { rootMargin: '0px 0px -6% 0px', threshold: 0.06 },
        )

    revealItems.forEach((item) => observer?.observe(item))

    return () => {
      observer?.disconnect()
    }
  }, [])

  return (
    <div className="home">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__field" aria-hidden="true">
          <span className="hero__grain" />
        </div>
        <div className="section-inner hero__inner">
          <h1 id="hero-title" className="hero__title">
            <span>Make more.</span>
            <span>Waste less.</span>
          </h1>
          <div className="hero__support">
            <p className="hero__lead">
              We find expensive problems in your business and solve them with the right technology.
            </p>
            <a className="text-cta text-cta--solid" href="#contact">
              Discuss an expensive problem
            </a>
            <p className="hero__note">
              Software, automation, AI, integrations — or an existing tool, when that makes more sense.
            </p>
          </div>
        </div>
        <p className="hero__signal" aria-hidden="true">
          problem <span>→</span> intervention <span>→</span> impact
        </p>
      </section>

      <section className="section problems" aria-labelledby="problems-title">
        <div className="section-inner problems__layout">
          <header className="section-heading problems__heading" data-reveal>
            <h2 id="problems-title">Some problems cost more than they look.</h2>
          </header>
          <div className="problems__list">
            {problems.map((problem, index) => (
              <article className="problem" data-reveal key={problem.title}>
                <span className="problem__number">0{index + 1}</span>
                <div>
                  <h3>{problem.title}</h3>
                  <p>{problem.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section outcomes" aria-labelledby="outcomes-title">
        <div className="section-inner">
          <header className="section-heading outcomes__heading" data-reveal>
            <h2 id="outcomes-title">Better technology should change the economics of the work.</h2>
          </header>
          <div className="outcomes__system">
            {outcomes.map((outcome, index) => (
              <article className="outcome" data-reveal key={outcome.title}>
                <p className="outcome__index">0{index + 1}</p>
                <h3>{outcome.title}</h3>
                <ul>
                  {outcome.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section" aria-labelledby="process-title">
        <div className="section-inner">
          <header className="section-heading process-section__heading" data-reveal>
            <div>
              <h2 id="process-title">
                We don&apos;t start with technology.
                <span>We start with the problem.</span>
              </h2>
            </div>
            <p className="process-section__shift" aria-hidden="true">
              complexity <span>→</span> clarity
            </p>
          </header>
          <ol className="process">
            {process.map((step, index) => (
              <li className="process__step" data-reveal key={step.title}>
                <span className="process__number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section tools" aria-labelledby="tools-title">
        <div className="section-inner">
          <header className="section-heading tools__heading" data-reveal>
            <h2 id="tools-title">
              Sometimes the answer is custom software.
              <span>Sometimes it isn&apos;t.</span>
            </h2>
            <p>We use whatever solves the problem best.</p>
          </header>
          <div className="capabilities">
            {capabilities.map((capability, index) => (
              <article className="capability" data-reveal key={capability.title}>
                <span>0{index + 1}</span>
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
              </article>
            ))}
          </div>
          <p className="tools__statement" data-reveal>
            We don&apos;t sell technology.
            <span>We improve businesses with it.</span>
          </p>
        </div>
      </section>

      <section className="section why" aria-labelledby="why-title">
        <div className="section-inner">
          <div className="why__intro" data-reveal>
            <h2 id="why-title">
              Small team.
              <span>Close to the problem.</span>
              <span>Responsible for the result.</span>
            </h2>
            <p>
              We work directly with the people who understand the problem and the people who will use
              the solution. The same team can investigate the workflow, design the fix and take it into
              production.
            </p>
          </div>
          <div className="principles">
            {principles.map(([title, body]) => (
              <article className="principle" data-reveal key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <Link className="case-link" to="/cases" data-reveal>
            See how we work in practice <span aria-hidden="true">→</span> Cases
          </Link>
        </div>
      </section>

      <section className="section contact" id="contact" aria-labelledby="contact-title">
        <div className="contact__field" aria-hidden="true">
          <span />
          <span />
        </div>
        <div className="section-inner contact__inner" data-reveal>
          <h2 id="contact-title">There may be an expensive problem hiding in your operations.</h2>
          <p className="contact__copy">
            Tell us what is happening. We&apos;ll help you figure out whether it&apos;s worth fixing.
          </p>
          <div className="contact__actions">
            <a className="text-cta text-cta--solid" href="mailto:hello@wehelp.studio">
              Let&apos;s discuss
            </a>
            <a className="text-link" href="mailto:hello@wehelp.studio">
              Show us your workflow <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
