
import { useState } from 'react';
import { processSteps } from '../data/experience.js';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Process() {
  const [active, setActive] = useState(0);

  const pct = ((active + 1) / processSteps.length) * 100;

  return (
    <section id="process" className="section" aria-labelledby="process-title">

      <div className="container">

        <SectionHeading
          index="06"
          eyebrow="My Development Process"
          id="process-title"
          title={<>How I turn ideas into <em>projects.</em></>}
          lede="My approach to learning, planning and building web applications."
        />

        <div className="process" style={{ '--progress': `${pct}%` }}>

          <div className="process__rail" aria-hidden="true">
            <span className="process__fill" />
          </div>

          <ol role="list" className="process__list">

            {processSteps.map((s, i) => (
              <Reveal
                as="li"
                key={s.n}
                delay={i * 0.04}
                className={`process__step ${
                  i <= active ? 'is-reached' : ''
                } ${i === active ? 'is-current' : ''}`}
                onPointerEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                tabIndex={0}
              >

                <span className="process__n">{s.n}</span>

                <h3 className="process__title">{s.title}</h3>

                <p className="process__text">{s.text}</p>

              </Reveal>
            ))}

          </ol>
        </div>
      </div>
    </section>
  );
}
