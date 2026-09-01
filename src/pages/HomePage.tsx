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
    title: ['Make', 'more'],
    icon: 'more',
    lines: ['More leads converted.', 'More customers reactivated.', 'Fewer opportunities lost.'],
  },
  {
    title: ['Waste', 'less'],
    icon: 'waste',
    lines: ['Less manual work.', 'Fewer errors and duplicated tasks.', 'Lower administrative overhead.'],
  },
  {
    title: ['Operate', 'better'],
    icon: 'operate',
    lines: [
      'Handle more without growing the team at the same rate.',
      'Move faster.',
      'See what is happening.',
    ],
  },
]

type OutcomeIconName = (typeof outcomes)[number]['icon']

function OutcomeIcon({ name }: { name: OutcomeIconName }) {
  if (name === 'more') {
    return (
      <svg className="outcome__icon" viewBox="0 0 100 96" aria-hidden="true">
        <circle className="outcome-icon__dot outcome-icon__dot--left" cx="50" cy="48" r="12" fill="white" fillOpacity="0.32" />
        <circle className="outcome-icon__dot outcome-icon__dot--right" cx="50" cy="48" r="12" fill="white" fillOpacity="0.32" />
        <circle cx="50" cy="48" r="12" fill="white" fillOpacity="0.9" />
      </svg>
    )
  }

  if (name === 'waste') {
    return (
      <svg className="outcome__icon" viewBox="0 0 100 96" aria-hidden="true">
        <circle className="outcome-icon__dot outcome-icon__dot--right" cx="88" cy="48" r="12" fill="white" fillOpacity="0.32" />
        <circle className="outcome-icon__dot outcome-icon__dot--center" cx="50" cy="48" r="12" fill="white" fillOpacity="0.32" />
        <circle cx="12" cy="48" r="12" fill="white" fillOpacity="0.9" />
      </svg>
    )
  }

  return (
    <svg className="outcome__icon" viewBox="0 0 100 96" aria-hidden="true">
      <circle className="outcome-icon__dot outcome-icon__dot--bottom-left" cx="12" cy="69" r="12" fill="white" fillOpacity="0.9" />
      <circle className="outcome-icon__dot outcome-icon__dot--top-right" cx="88" cy="27" r="12" fill="white" fillOpacity="0.32" />
      <circle className="outcome-icon__dot outcome-icon__dot--bottom-right" cx="71" cy="46" r="12" fill="white" fillOpacity="0.32" />
      <circle className="outcome-icon__dot outcome-icon__dot--top-left" cx="29" cy="27" r="12" fill="white" fillOpacity="0.9" />
    </svg>
  )
}

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

const heroTools = [
  'Automation & Integration',
  'AI',
  'Product & Interface design',
  'Custom Software',
  'Backend & Data',
]

const team = [
  {
    name: 'Alex Morgan',
    role: 'Strategy & Operations',
    image: new URL('../../assets/images/team-01.webp', import.meta.url).href,
  },
  {
    name: 'Daniel Reed',
    role: 'Product & Technology',
    image: new URL('../../assets/images/team-03.webp', import.meta.url).href,
  },
  {
    name: 'Maya Collins',
    role: 'Design & Research',
    image: new URL('../../assets/images/team-02.webp', import.meta.url).href,
  },
]

export function HomePage() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const outcomeSystem = document.querySelector<HTMLElement>('.outcomes__system')
    const outcomeCards = Array.from(document.querySelectorAll<HTMLElement>('.outcome'))
    const processList = document.querySelector<HTMLOListElement>('.process')
    const processSteps = Array.from(document.querySelectorAll<HTMLElement>('.process__step'))
    const mobileOutcomes = window.matchMedia('(max-width: 48rem)')
    const animationTimers: number[] = []
    const hoverTimers = new Map<HTMLElement, number>()
    const replayTimers = new Map<HTMLElement, number>()
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

    let outcomeObserver: IntersectionObserver | null = null

    if (!reducedMotion && mobileOutcomes.matches) {
      outcomeObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return

            const card = entry.target as HTMLElement
            outcomeObserver?.unobserve(card)
            animationTimers.push(
              window.setTimeout(() => card.classList.add('is-icon-settled'), 500),
            )
          })
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.2 },
      )
    } else if (!reducedMotion) {
      outcomeObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) return

          outcomeCards.forEach((card, index) => {
            animationTimers.push(
              window.setTimeout(() => card.classList.add('is-icon-settled'), (index + 3) * 1000),
            )
          })
          outcomeObserver?.disconnect()
        },
        { threshold: 0.12 },
      )
    }

    if (reducedMotion) {
      outcomeCards.forEach((card) => card.classList.add('is-icon-settled'))
    } else if (mobileOutcomes.matches) {
      outcomeCards.forEach((card) => outcomeObserver?.observe(card))
    } else if (outcomeSystem) {
      outcomeObserver?.observe(outcomeSystem)
    }

    const replayIcon = (card: HTMLElement) => {
      if (!card.classList.contains('is-icon-settled')) return

      const activeTimer = replayTimers.get(card)
      if (activeTimer) window.clearTimeout(activeTimer)
      card.classList.remove('is-icon-replaying')
      void card.offsetWidth
      card.classList.add('is-icon-replaying')
      replayTimers.set(
        card,
        window.setTimeout(() => {
          card.classList.remove('is-icon-replaying')
          replayTimers.delete(card)
        }, 1500),
      )
    }

    const scheduleReplay = (event: Event) => {
      const card = event.currentTarget as HTMLElement
      if (!card.classList.contains('is-icon-settled')) return

      hoverTimers.set(
        card,
        window.setTimeout(() => {
          hoverTimers.delete(card)
          replayIcon(card)
        }, 500),
      )
    }

    const cancelScheduledReplay = (event: Event) => {
      const card = event.currentTarget as HTMLElement
      const hoverTimer = hoverTimers.get(card)
      if (!hoverTimer) return

      window.clearTimeout(hoverTimer)
      hoverTimers.delete(card)
    }

    if (!reducedMotion) {
      outcomeCards.forEach((card) => {
        card.addEventListener('mouseenter', scheduleReplay)
        card.addEventListener('mouseleave', cancelScheduledReplay)
      })
    }

    let processFrame = 0
    const updateProcessProgress = () => {
      processFrame = 0
      if (!processList || processSteps.length === 0) return

      const listRect = processList.getBoundingClientRect()
      const marker = window.innerHeight * 0.55
      const centers = processSteps.map((step) => {
        const number = step.querySelector<HTMLElement>('.process__number')
        if (!number) return 0
        const numberRect = number.getBoundingClientRect()
        return numberRect.top - listRect.top + numberRect.height / 2
      })
      const firstCenter = centers[0]
      const lastCenter = centers.at(-1) ?? firstCenter
      const markerInList = marker - listRect.top
      const progress = Math.min(lastCenter, Math.max(firstCenter, markerInList))

      processList.style.setProperty('--process-line-top', `${firstCenter}px`)
      processList.style.setProperty('--process-line-height', `${lastCenter - firstCenter}px`)
      processList.style.setProperty('--process-progress', `${progress - firstCenter}px`)

      processSteps.forEach((step, index) => {
        step.classList.toggle('is-active', index === 0 || centers[index] <= markerInList)
      })
    }

    const scheduleProcessProgress = () => {
      if (processFrame) return
      processFrame = window.requestAnimationFrame(updateProcessProgress)
    }

    updateProcessProgress()
    window.addEventListener('scroll', scheduleProcessProgress, { passive: true })
    window.addEventListener('resize', scheduleProcessProgress)

    return () => {
      observer?.disconnect()
      outcomeObserver?.disconnect()
      animationTimers.forEach((timer) => window.clearTimeout(timer))
      hoverTimers.forEach((timer) => window.clearTimeout(timer))
      replayTimers.forEach((timer) => window.clearTimeout(timer))
      outcomeCards.forEach((card) => {
        card.removeEventListener('mouseenter', scheduleReplay)
        card.removeEventListener('mouseleave', cancelScheduledReplay)
      })
      window.removeEventListener('scroll', scheduleProcessProgress)
      window.removeEventListener('resize', scheduleProcessProgress)
      if (processFrame) window.cancelAnimationFrame(processFrame)
    }
  }, [])

  return (
    <div className="home">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__field" aria-hidden="true">
          <span className="hero__grain" />
        </div>
        <div className="section-inner hero__inner">
          <div className="hero__content">
            <h1 id="hero-title" className="hero__title">
              <span>Make more.</span>
              <span>Waste less.</span>
            </h1>
            <div className="hero__support">
              <p className="hero__lead">
                We find expensive problems in your business and solve them with the right technology.
              </p>
              <a className="text-cta text-cta--solid hero__cta" href="#contact">
                Discuss a problem
              </a>
            </div>
          </div>
          <ul className="hero__tools" aria-label="Our technology capabilities">
            {heroTools.map((tool) => (
              <li className="hero-tool" key={tool}>
                <span>{tool}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section home-about" aria-labelledby="home-about-title">
        <div className="section-inner">
          <div className="home-about__intro" data-reveal>
            <div>
              <p className="section-eyebrow">Who we are</p>
              <h2 id="home-about-title">We help businesses work better.</h2>
            </div>
            <div className="home-about__copy">
              <p>
                <strong>Wehelp.studio</strong> is a small technology &amp; operations studio. We work
                with companies that want to make more, waste less, or operate more efficiently.
              </p>
              <p>
                We start by understanding how the business actually works — the people, processes,
                tools and data behind it. Then we find the problem worth solving and take the right
                solution into production.
              </p>
            </div>
          </div>

          <div className="home-about__team">
            {team.map((person) => (
              <article className="team-card" data-reveal key={person.name}>
                <img src={person.image} alt={`${person.name}, ${person.role}`} />
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section problems" aria-labelledby="problems-title">
        <div className="section-inner problems__layout">
          <header className="section-heading problems__heading" data-reveal>
            <p className="section-eyebrow">Problems worth fixing</p>
            <h2 id="problems-title">Some problems cost more than they look.</h2>
          </header>
          <div className="problems__list">
            {problems.map((problem) => (
              <article className="problem" data-reveal key={problem.title}>
                <span className="problem__number" aria-hidden="true" />
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
            <p className="section-eyebrow">What changes</p>
            <h2 id="outcomes-title">Better technology should change the economics of the work.</h2>
          </header>
          <div className="outcomes__system">
            {outcomes.map((outcome) => (
              <article className={`outcome outcome--${outcome.icon}`} data-reveal key={outcome.title.join(' ')}>
                <OutcomeIcon name={outcome.icon} />
                <h3>
                  {outcome.title.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h3>
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
              <p className="section-eyebrow">How we work</p>
              <h2 id="process-title">
                We start with the problem, not the technology.
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
            <div>
              <p className="section-eyebrow">The right tool</p>
              <h2 id="tools-title">
                Sometimes the answer is custom software.
                <span>Sometimes it isn&apos;t.</span>
              </h2>
            </div>
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
            <div>
              <p className="section-eyebrow">Why Wehelp</p>
              <h2 id="why-title">
                Small team.
                <span>Close to the problem.</span>
                <span>Responsible for the result.</span>
              </h2>
            </div>
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
