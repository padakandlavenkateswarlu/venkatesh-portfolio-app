
import { site } from '../data/site.js';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';

export default function About() {
  const { about } = site;

  const stats = site.stats.filter(
    (s) => s.value !== null && s.value !== ''
  );

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          index="01"
          eyebrow="About Me"
          id="about-title"
          title={<>Building my path in <em>technology.</em></>}
        />

        <div className="about">
          <div className="about__body" style={{ width: '100%' }}>
            <Reveal>
              {about.summary.map((p, i) => (
                <p
                  key={i}
                  className={i === 0 ? 'about__lead' : 'about__text'}
                >
                  {p}
                </p>
              ))}
            </Reveal>

            <ol role="list" className="principles">
              {about.philosophy.map((item, i) => (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={i * 0.06}
                  className="principle"
                >
                  <span className="principle__n">0{i + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>

            {about.goals && (
              <Reveal as="p" className="about__goal">
                <span className="about__goal-label">Career Goal</span>
                {about.goals}
              </Reveal>
            )}

            {stats.length > 0 && (
              <Reveal as="dl" className="stats">
                {stats.map((s) => (
                  <div key={s.label} className="stat">
                    <dt>{s.label}</dt>
                    <dd>{s.value}</dd>
                  </div>
                ))}
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
