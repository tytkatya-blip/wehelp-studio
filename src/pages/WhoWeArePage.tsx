import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const principles = [
  ['Business first', 'Impact before technology.'],
  ['End to end', 'From understanding to production.'],
  ['Technology agnostic', 'Build only when building makes sense.'],
  ['Production minded', "A recommendation isn't a solution until it works in practice."],
]

export function WhoWeArePage() {
  useEffect(() => {
    window.scrollTo(0, 0)

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>('.who-page [data-reveal]'),
    )

    if (reducedMotion) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 },
    )

    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="who-page">
      <section className="who-intro" aria-labelledby="who-intro-title">
        <div className="section-inner who-intro__inner">
          <h1 id="who-intro-title" data-reveal>
            We help businesses work better.
          </h1>
          <div className="who-intro__copy" data-reveal>
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
      </section>

      <section className="section who-thinking" aria-labelledby="who-thinking-title">
        <div className="section-inner">
          <div className="who-thinking__intro" data-reveal>
            <h2 id="who-thinking-title">Technology is a means, not the answer.</h2>
          </div>

          <div className="who-thinking__visual">
            <div className="who-thinking__copy">
              <p>
                Sometimes the right solution is custom software. Sometimes it&apos;s automation, AI,
                an integration — or a product that already exists.
              </p>
              <p>
                We don&apos;t build for the sake of building. We choose the simplest approach that can
                create meaningful impact.
              </p>
            </div>

            <div className="thinking-paths" aria-hidden="true" data-reveal>
              <span className="thinking-paths__line thinking-paths__line--one" />
              <span className="thinking-paths__line thinking-paths__line--two" />
              <span className="thinking-paths__line thinking-paths__line--three" />
              <span className="thinking-paths__outcome" />
            </div>
          </div>

          <p className="who-thinking__statement" data-reveal>
            We don&apos;t sell technology.
            <span>We improve businesses with it.</span>
          </p>
        </div>
      </section>

      <section className="section who-work" aria-labelledby="who-work-title">
        <div className="section-inner">
          <div className="who-work__intro" data-reveal>
            <h2 id="who-work-title">Small team. End to end.</h2>
            <div className="who-work__copy">
              <p className="who-work__lead">
                We stay close to the problem from the first conversation to the working solution.
              </p>
              <p>
                We talk to the people involved, understand the workflow, quantify the opportunity,
                design the fix, implement it and see how it performs in real use.
              </p>
            </div>
          </div>

          <div className="principles who-work__principles">
            {principles.map(([title, body]) => (
              <article className="principle" data-reveal key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>

          <Link className="case-link" to="/cases" data-reveal>
            See our work <span aria-hidden="true">→</span> Cases
          </Link>
        </div>
      </section>
    </div>
  )
}
