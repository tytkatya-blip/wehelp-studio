import { useEffect, useRef, useState } from 'react'

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
      'Handle more without growing the team.',
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

const testimonials = [
  {
    quote:
      'Wehelp took the time to understand how our business actually works before proposing a solution. The process felt thoughtful, practical and focused on what would create the most value.',
    name: 'Tim Fiebach',
    role: 'Founder Top-IT-Service, IT-Administrator',
  },
  {
    quote:
      'They translated a complicated workflow into something clear, useful and realistic. We always understood what was being built, why it mattered and what would change for the team.',
    name: 'Tim Fiebach',
    role: 'Founder Top-IT-Service, IT-Administrator',
  },
  {
    quote:
      'The result was not technology for its own sake. It removed friction from the daily work and gave us a solution the team could confidently use from day one.',
    name: 'Tim Fiebach',
    role: 'Founder Top-IT-Service, IT-Administrator',
  },
]

const testimonialImage = new URL('../../assets/images/client-tim.webp', import.meta.url).href

function TypingLine({ text, accent = false }: { text: string; accent?: boolean }) {
  return (
    <span
      className={`tools__statement-line${accent ? ' tools__statement-line--accent' : ''}`}
      aria-hidden="true"
    >
      {text.split(' ').map((word, wordIndex) => (
        <span className="tools__statement-word" key={`${word}-${wordIndex}`}>
          {Array.from(word).map((character, characterIndex) => (
            <span className="tools__statement-char" key={`${character}-${characterIndex}`}>
              {character}
            </span>
          ))}
        </span>
      ))}
    </span>
  )
}

export function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const testimonialTrackRef = useRef<HTMLDivElement>(null)

  const showTestimonial = (index: number) => {
    const track = testimonialTrackRef.current
    const card = track?.children[index] as HTMLElement | undefined
    if (!track || !card) return

    const centeredScrollPosition =
      card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2

    track.scrollTo({ left: centeredScrollPosition, behavior: 'smooth' })
    setActiveTestimonial(index)
  }

  const updateActiveTestimonial = () => {
    const track = testimonialTrackRef.current
    const firstCard = track?.firstElementChild as HTMLElement | null
    if (!track || !firstCard) return

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0
    const index = Math.round(track.scrollLeft / (firstCard.offsetWidth + gap))
    setActiveTestimonial(Math.min(testimonials.length - 1, Math.max(0, index)))
  }

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-scroll-typing])'),
    )
    const outcomeCards = Array.from(document.querySelectorAll<HTMLElement>('.outcome'))
    const processList = document.querySelector<HTMLOListElement>('.process')
    const processSteps = Array.from(document.querySelectorAll<HTMLElement>('.process__step'))
    const typingStatement = document.querySelector<HTMLElement>('[data-scroll-typing]')
    const typingCharacters = Array.from(
      typingStatement?.querySelectorAll<HTMLElement>('.tools__statement-char') ?? [],
    )
    const accentFirstCharacter = typingStatement?.querySelector<HTMLElement>(
      '.tools__statement-line--accent .tools__statement-char',
    )
    const accentStartIndex = accentFirstCharacter
      ? typingCharacters.indexOf(accentFirstCharacter)
      : -1
    const statementFlair = document.querySelector<HTMLElement>('[data-statement-flair]')
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

    let typingFrame = 0
    let hasPlayedStatementFlair = false
    const updateScrollTyping = () => {
      typingFrame = 0
      if (!typingStatement || typingCharacters.length === 0) return

      if (reducedMotion) {
        typingCharacters.forEach((character) => {
          character.style.opacity = '1'
        })
        return
      }

      const statementRect = typingStatement.getBoundingClientRect()
      const revealStart = window.innerHeight * 0.9
      const revealDistance = window.innerHeight * 0.8
      const progress = Math.min(
        1,
        Math.max(0, (revealStart - statementRect.top) / revealDistance),
      )
      const characterDuration = 8
      const timelineLength = characterDuration + typingCharacters.length - 1
      const timelinePosition = progress * timelineLength

      typingCharacters.forEach((character, index) => {
        const characterProgress = Math.min(
          1,
          Math.max(0, (timelinePosition - index) / characterDuration),
        )
        const easedProgress = 1 - (1 - characterProgress) ** 2
        character.style.opacity = String(0.1 + easedProgress * 0.9)
      })

      if (
        !hasPlayedStatementFlair &&
        statementFlair &&
        accentStartIndex >= 0 &&
        timelinePosition >= accentStartIndex
      ) {
        hasPlayedStatementFlair = true
        statementFlair.classList.add('is-animating')
      }

      if (hasPlayedStatementFlair && statementFlair && accentStartIndex >= 0) {
        const triggerProgress = accentStartIndex / timelineLength
        const triggerTop = revealStart - triggerProgress * revealDistance
        const rotationDistance = window.innerHeight + statementRect.height
        const rotationProgress = Math.min(
          1,
          Math.max(0, (triggerTop - statementRect.top) / rotationDistance),
        )

        statementFlair.style.setProperty(
          '--statement-asterisk-rotation',
          `${rotationProgress * 720}deg`,
        )
      }
    }

    const scheduleScrollTyping = () => {
      if (typingFrame) return
      typingFrame = window.requestAnimationFrame(updateScrollTyping)
    }

    updateProcessProgress()
    updateScrollTyping()
    window.addEventListener('scroll', scheduleProcessProgress, { passive: true })
    window.addEventListener('resize', scheduleProcessProgress)
    window.addEventListener('scroll', scheduleScrollTyping, { passive: true })
    window.addEventListener('resize', scheduleScrollTyping)

    return () => {
      observer?.disconnect()
      hoverTimers.forEach((timer) => window.clearTimeout(timer))
      replayTimers.forEach((timer) => window.clearTimeout(timer))
      outcomeCards.forEach((card) => {
        card.removeEventListener('mouseenter', scheduleReplay)
        card.removeEventListener('mouseleave', cancelScheduledReplay)
      })
      window.removeEventListener('scroll', scheduleProcessProgress)
      window.removeEventListener('resize', scheduleProcessProgress)
      window.removeEventListener('scroll', scheduleScrollTyping)
      window.removeEventListener('resize', scheduleScrollTyping)
      if (processFrame) window.cancelAnimationFrame(processFrame)
      if (typingFrame) window.cancelAnimationFrame(typingFrame)
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
            <ul className="hero__tools" aria-label="Our technology capabilities">
              {heroTools.map((tool) => (
                <li className="hero-tool" key={tool}>
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
            <p className="hero__lead">
              We find expensive problems in your business and solve them with the right technology.
            </p>
          </div>
        </div>
      </section>

      <section className="section home-about" id="who-we-are" aria-labelledby="home-about-title">
        <div className="section-inner">
          <div className="home-about__intro" data-reveal>
            <div className="section-heading">
              <p className="section-eyebrow">Who we are</p>
              <h2 id="home-about-title">
                We help businesses
                <br />
                work better.
              </h2>
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
                <div className="team-card__info">
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section problems" id="problems" aria-labelledby="problems-title">
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
              <article
                className={`outcome outcome--${outcome.icon} is-icon-settled`}
                data-reveal
                key={outcome.title.join(' ')}
              >
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

      <section className="section process-section" id="what-we-do" aria-labelledby="process-title">
        <div className="section-inner">
          <header className="section-heading process-section__heading" data-reveal>
            <div>
              <p className="section-eyebrow">What we do</p>
              <h2 id="process-title">
                We start with the problem, not the technology.
              </h2>
            </div>
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

      <section className="section tools" id="tools" aria-labelledby="tools-title">
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
          <div className="tools__statement-stage">
            <p
              className="tools__statement"
              data-scroll-typing
              aria-label="We don't sell technology. We improve businesses with it."
            >
              <TypingLine text="We don't sell technology." />
              <TypingLine text="We improve businesses with it." accent />
            </p>

            <div className="tools__statement-flair" data-statement-flair aria-hidden="true">
              <svg
                className="tools__statement-ribbon"
                viewBox="0 0 300 300"
                fill="none"
              >
                <defs>
                  <linearGradient id="statement-ribbon-gradient" x1="70" y1="260" x2="220" y2="70">
                    <stop stopColor="#FBA844" />
                    <stop offset="1" stopColor="#FBA844" />
                  </linearGradient>
                </defs>
                <path
                  pathLength="1"
                  d="M218 78C168 101 112 137 106 197C100 254 179 278 203 229C226 181 163 148 117 175C87 193 76 225 87 254"
                  stroke="url(#statement-ribbon-gradient)"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
              </svg>

              <span className="tools__statement-asterisk-shell">
                <svg
                  className="tools__statement-asterisk"
                  viewBox="0 0 90 90"
                  fill="none"
                >
                  <defs>
                    <linearGradient
                      id="statement-asterisk-gradient"
                      x1="75"
                      y1="-3"
                      x2="19.0687"
                      y2="76.6731"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FD9B23" />
                      <stop offset="1" stopColor="#EB5321" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M44 0C47.3137 1.44847e-07 50 2.68629 50 6V31.5156L68.3359 13.1797C70.679 10.8371 74.4773 10.8371 76.8203 13.1797C79.1635 15.5228 79.1635 19.3219 76.8203 21.665L59.4854 39H84C87.3137 39 90 41.6863 90 45C90 48.3137 87.3137 51 84 51H58.0703L76.1123 69.042C78.4554 71.3851 78.4554 75.1842 76.1123 77.5273C73.7693 79.8699 69.971 79.8698 67.6279 77.5273L50 59.8994V84C50 87.3137 47.3137 90 44 90C40.6863 90 38 87.3137 38 84V60.4854L21.666 76.8193C19.3229 79.1625 15.5238 79.1625 13.1807 76.8193C10.8381 74.4763 10.8382 70.678 13.1807 68.335L30.5156 51H6C2.6863 51 3.57611e-06 48.3137 0 45C2.89693e-07 41.6863 2.6863 39 6 39H29.1006L12.4727 22.3721C10.1301 20.029 10.1301 16.2307 12.4727 13.8877C14.8158 11.5445 18.6149 11.5445 20.958 13.8877L38 30.9297V6C38 2.68629 40.6863 2.41719e-07 44 0Z"
                    fill="url(#statement-asterisk-gradient)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials" id="testimonials" aria-labelledby="testimonials-title">
        <div className="section-inner testimonials__heading section-heading" data-reveal>
          <p className="section-eyebrow">In their words</p>
          <h2 id="testimonials-title">What it&apos;s like to work with us</h2>
        </div>

        <div className="testimonials__carousel" data-reveal>
          <div
            className="testimonials__track"
            ref={testimonialTrackRef}
            onScroll={updateActiveTestimonial}
          >
            {testimonials.map((testimonial, index) => (
              <article
                className="testimonial-card"
                id={`testimonial-${index + 1}`}
                role="button"
                tabIndex={0}
                aria-label={`Center testimonial from ${testimonial.name}`}
                onClick={() => showTestimonial(index)}
                onKeyDown={(event) => {
                  if (event.key !== 'Enter' && event.key !== ' ') return
                  event.preventDefault()
                  showTestimonial(index)
                }}
                key={`${testimonial.name}-${index}`}
              >
                <img
                  className="testimonial-card__image"
                  src={testimonialImage}
                  alt={testimonial.name}
                  width="180"
                  height="180"
                />
                <blockquote>
                  <p>“{testimonial.quote}”</p>
                  <footer>
                    <cite>{testimonial.name}</cite>
                    <span>{testimonial.role}</span>
                  </footer>
                </blockquote>
              </article>
            ))}
          </div>

          <div className="testimonials__pagination" aria-label="Choose a testimonial">
            {testimonials.map((testimonial, index) => (
              <button
                type="button"
                className={index === activeTestimonial ? 'is-active' : ''}
                aria-label={`Show testimonial from ${testimonial.name}, slide ${index + 1}`}
                aria-current={index === activeTestimonial ? 'true' : undefined}
                onClick={() => showTestimonial(index)}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section why" aria-labelledby="why-title">
        <div className="section-inner">
          <div className="why__intro" data-reveal>
            <div className="section-heading">
              <p className="section-eyebrow">Why wehelp.studio</p>
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
        </div>
      </section>

      <section className="section contact" id="contact" aria-labelledby="contact-title">
        <div className="contact__field" aria-hidden="true" />
        <div className="section-inner contact__inner" data-reveal>
          <div className="contact__content">
            <div className="contact__dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <h2 id="contact-title">
              <span className="contact__line">There may be </span>
              <em className="contact__line">an expensive problem </em>
              <span className="contact__line">hiding in your operations.</span>
              <span className="contact__cta-row">
                <svg
                  className="contact__arrow"
                  viewBox="0 0 92 64"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M56.1355 1.71608C58.4059 -0.572027 62.0879 -0.572027 64.3584 1.71608L90.2972 27.8566C92.5676 30.1447 92.5676 33.8553 90.2972 36.1434L64.3584 62.2839C62.0879 64.572 58.4059 64.572 56.1355 62.2839C53.865 59.9958 53.865 56.2852 56.1355 53.997L72.1498 37.8591H5.81386C2.60295 37.8591 0 35.2359 0 32C0 28.7641 2.60295 26.1409 5.81386 26.1409H72.1498L56.1355 10.0029C53.865 7.71483 53.865 4.00419 56.1355 1.71608Z"
                    fill="currentColor"
                  />
                </svg>
                <a href="mailto:hello@wehelp.studio">
                  <span className="contact__cta-line">Reach us</span>{' '}
                  <span className="contact__cta-line">for a discuss</span>
                </a>
                <svg
                  className="contact__asterisk"
                  viewBox="0 0 90 90"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M44 0C47.3137 1.44847e-07 50 2.68629 50 6V31.5156L68.3359 13.1797C70.679 10.8371 74.4773 10.8371 76.8203 13.1797C79.1635 15.5228 79.1635 19.3219 76.8203 21.665L59.4854 39H84C87.3137 39 90 41.6863 90 45C90 48.3137 87.3137 51 84 51H58.0703L76.1123 69.042C78.4554 71.3851 78.4554 75.1842 76.1123 77.5273C73.7693 79.8699 69.971 79.8698 67.6279 77.5273L50 59.8994V84C50 87.3137 47.3137 90 44 90C40.6863 90 38 87.3137 38 84V60.4854L21.666 76.8193C19.3229 79.1625 15.5238 79.1625 13.1807 76.8193C10.8381 74.4763 10.8382 70.678 13.1807 68.335L30.5156 51H6C2.6863 51 3.57611e-06 48.3137 0 45C2.89693e-07 41.6863 2.6863 39 6 39H29.1006L12.4727 22.3721C10.1301 20.029 10.1301 16.2307 12.4727 13.8877C14.8158 11.5445 18.6149 11.5445 20.958 13.8877L38 30.9297V6C38 2.68629 40.6863 2.41719e-07 44 0Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </h2>
          </div>
        </div>
      </section>
    </div>
  )
}
