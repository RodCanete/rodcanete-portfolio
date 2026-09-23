import type { CSSProperties, ReactNode } from 'react'

type Project = {
  number: string
  name: string
  kicker: string
  role: string
  year: string
  description: string
  features: string[]
  stack: string[]
  repository: string
  live?: string
  accent: string
  visual: 'barrio' | 'laundry' | 'prolink' | 'kitakita' | 'amanviro' | 'gitit'
}

const projects: Project[] = [
  {
    number: '01',
    name: 'BarrioRun',
    kicker: 'Game design · Desktop',
    role: 'Lead Developer · UI/UX',
    year: 'Java / Swing',
    description:
      'A Filipino-themed 2D endless runner where players jump and duck through a rural barrio as the pace and obstacle frequency climb.',
    features: ['Custom pixel world', 'Adaptive difficulty', 'Local high scores'],
    stack: ['Java', 'Swing', 'Java2D', 'Java Sound'],
    repository: 'https://github.com/RodCanete/BarrioRun',
    accent: '#d9ff57',
    visual: 'barrio',
  },
  {
    number: '02',
    name: 'LaundryLink',
    kicker: 'Booking · Payments · Mobile',
    role: 'Full-stack Developer',
    year: 'Web + Android',
    description:
      'A prepaid priority-queue platform that lets customers discover partner laundry shops, reserve limited slots, pay online, and check in with a QR code.',
    features: ['Capacity-aware slots', 'PayMongo checkout', 'QR confirmations'],
    stack: ['React', 'Spring Boot', 'Kotlin', 'PostgreSQL'],
    repository: 'https://github.com/RodCanete/IT342-Canete-LaundryLink',
    accent: '#46d6ff',
    visual: 'laundry',
  },
  {
    number: '03',
    name: 'ProLink',
    kicker: 'Marketplace · Services',
    role: 'Lead Developer',
    year: 'Django / Supabase',
    description:
      'A consultation marketplace connecting students and workers with professionals for credible feedback on academic and work-related outputs.',
    features: ['Service listings', 'Payments and transactions', 'Ratings and reviews'],
    stack: ['Django', 'Python', 'Supabase', 'JavaScript'],
    repository: 'https://github.com/RodCanete/CSIT327-G2-ProLink',
    live: 'https://prolink-vysv.onrender.com/',
    accent: '#ff715b',
    visual: 'prolink',
  },
  {
    number: '04',
    name: 'KitaKita',
    kicker: 'Inventory · Operations',
    role: 'Full-stack Developer',
    year: 'React / Spring',
    description:
      'A full-stack inventory management system pairing a focused React workspace with a secured Spring Boot API and MySQL persistence.',
    features: ['Inventory workflows', 'JWT authentication', 'REST architecture'],
    stack: ['React', 'Spring Boot', 'Java', 'MySQL'],
    repository: 'https://github.com/RodCanete/kitakita-store-inventory-system',
    accent: '#20d998',
    visual: 'kitakita',
  },
  {
    number: '05',
    name: 'Amanviro Hotel',
    kicker: 'Hospitality · Web',
    role: 'Web Developer',
    year: 'Multi-page site',
    description:
      'A hospitality website built around discovery: rooms, dining, offers, property stories, and contact information in a cohesive resort experience.',
    features: ['Room catalogue', 'Dining and offers', 'Responsive pages'],
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    repository: 'https://github.com/RodCanete/Amanviro_Hotel',
    accent: '#ffcb7a',
    visual: 'amanviro',
  },
  {
    number: '06',
    name: 'GIT it!',
    kicker: 'Developer education · Gamification',
    role: 'Product Contributor',
    year: 'React / Django',
    description:
      'A consequence-safe Git learning world that pairs a simulated terminal with live repository-state feedback, challenges, rewards, and backend verification.',
    features: ['Curriculum and dashboard', 'Simulator performance', 'Accessible progression UX'],
    stack: ['React', 'TypeScript', 'Django', 'REST'],
    repository: 'https://github.com/joanaxyz/2526-sem2-it332-34_GITit',
    accent: '#06a8ff',
    visual: 'gitit',
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 16 16 4M7 4h9v9" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.84c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

function ProjectVisual({ type, name }: { type: Project['visual']; name: string }) {
  if (type === 'barrio') {
    return <img src="/projects/barriorun.png" alt="Pixel-art rural village scene from BarrioRun" />
  }

  if (type === 'amanviro') {
    return <img src="/projects/amanviro.jpg" alt="Oceanfront pool scene used in the Amanviro Hotel website" />
  }

  if (type === 'gitit') {
    return <img src="/projects/gitit.png" alt="GIT it learning dashboard showing skill progress and achievements" />
  }

  if (type === 'laundry') {
    return (
      <div className="visual-interface laundry-interface" role="img" aria-label="LaundryLink brand and booking queue interface">
        <div className="phone-shell">
          <div className="phone-top"><span /><span /></div>
          <div className="brand-lockup"><img src="/projects/laundrylink.svg" alt="" /><b>LaundryLink</b></div>
          <p className="interface-label">TODAY'S QUEUE</p>
          <div className="slot-card"><span>08:30</span><b>Priority wash</b><i>02 slots</i></div>
          <div className="slot-card muted"><span>10:00</span><b>Standard</b><i>05 slots</i></div>
          <div className="confirm-bar">Reserve slot <span>→</span></div>
        </div>
      </div>
    )
  }

  if (type === 'kitakita') {
    return (
      <div className="visual-interface kitakita-interface" role="img" aria-label="KitaKita inventory dashboard motif">
        <div className="inventory-top"><img src="/projects/kitakita.png" alt="" /><span>INVENTORY / OVERVIEW</span></div>
        <div className="inventory-stats"><div><small>IN STOCK</small><b>248</b></div><div><small>LOW STOCK</small><b>12</b></div><div><small>ORDERS</small><b>37</b></div></div>
        <div className="inventory-table">
          <p><span>Item</span><span>Status</span><span>Qty</span></p>
          <p><b>Field jacket</b><i>In stock</i><span>48</span></p>
          <p><b>Canvas tote</b><i className="warn">Low</i><span>06</span></p>
          <p><b>Everyday cap</b><i>In stock</i><span>31</span></p>
        </div>
      </div>
    )
  }

  return (
    <div className="visual-interface prolink-interface" role="img" aria-label="ProLink professional consultation marketplace motif">
      <div className="prolink-wordmark">PRO<span>/</span>LINK</div>
      <p>Find the right perspective.</p>
      <div className="expert-row">
        <span className="avatar">UX</span>
        <div><b>Product critique</b><small>Design · 45 min</small></div>
        <strong>₱450</strong>
      </div>
      <div className="expert-row offset">
        <span className="avatar">SE</span>
        <div><b>Code review</b><small>Engineering · 60 min</small></div>
        <strong>₱600</strong>
      </div>
      <span className="corner-label">{name} / VERIFIED EXPERTS</span>
    </div>
  )
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="text-link" href={href} target="_blank" rel="noreferrer">
      {children}<ArrowIcon />
    </a>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const style = { '--accent': project.accent } as CSSProperties
  return (
    <article className={`project-card ${index % 2 ? 'reverse' : ''}`} style={style}>
      <div className="project-visual">
        <span className="visual-number" aria-hidden="true">{project.number}</span>
        <ProjectVisual type={project.visual} name={project.name} />
      </div>
      <div className="project-copy">
        <div className="project-meta"><span>{project.kicker}</span><span>{project.year}</span></div>
        <h3>{project.name}</h3>
        <p className="project-role">{project.role}</p>
        <p className="project-description">{project.description}</p>
        <ul className="feature-list">
          {project.features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
        <div className="stack-list" aria-label={`${project.name} technology stack`}>
          {project.stack.map((item) => <span key={item}>{item}</span>)}
        </div>
        <div className="project-links">
          <TextLink href={project.repository}>Source</TextLink>
          {project.live && <TextLink href={project.live}>Live site</TextLink>}
        </div>
      </div>
    </article>
  )
}

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#work">Skip to selected work</a>
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Rod Gabrielle Cañete, home"><span>R</span><span>C</span></a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="https://github.com/RodCanete" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow"><span /> Software developer · Selected work</p>
            <h1 id="hero-title">Rod Gabrielle<br /><em>Cañete.</em></h1>
            <p className="hero-intro">I build useful web experiences, tools, and games—turning complex systems into products people can understand and enjoy.</p>
            <a className="work-cta" href="#work"><span>Explore the work</span><i>↓</i></a>
          </div>
          <div className="hero-showcase" aria-hidden="true">
            <div className="showcase-frame showcase-main"><img src="/projects/barriorun.png" alt="" /></div>
            <div className="showcase-frame showcase-secondary"><img src="/projects/gitit.png" alt="" /></div>
            <div className="showcase-caption"><b>06</b><span>Products across games,<br />platforms &amp; operations.</span></div>
          </div>
          <div className="hero-index" aria-label="Portfolio overview">
            <p><b>01—06</b><span>Selected projects</span></p>
            <p><b>WEB / MOBILE / DESKTOP</b><span>Full product range</span></p>
            <p><b>DESIGN + ENGINEERING</b><span>End-to-end thinking</span></p>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="eyebrow"><span /> Case studies</p>
            <h2 id="work-title">Selected work.<br /><em>Built with intent.</em></h2>
            <p>Six projects spanning game systems, service platforms, inventory operations, hospitality, and developer education.</p>
          </div>
          <div className="project-list">
            {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="about-mark" aria-hidden="true"><span>R</span><span>G</span><span>C</span></div>
          <div className="about-copy">
            <p className="eyebrow"><span /> Approach</p>
            <h2 id="about-title">Software should feel <em>considered.</em></h2>
            <p>I work across interface design, frontend systems, backend services, and product flows. The common thread is practical: understand the problem, shape the experience, and make every interaction earn its place.</p>
            <div className="discipline-grid">
              <span>Frontend systems</span><span>Backend services</span><span>Product UI/UX</span><span>Interactive experiences</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p className="footer-lead">Have a project in mind?<br /><em>Let’s connect.</em></p>
        <a className="github-cta" href="https://github.com/RodCanete" target="_blank" rel="noreferrer"><GithubIcon /><span>Find me on GitHub</span><ArrowIcon /></a>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Rod Gabrielle Cañete</span><span>Designed &amp; built with care.</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </div>
  )
}

export default App
