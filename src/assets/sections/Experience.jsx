import { education } from '../data/experience.js';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Experience() {
  return (
    <section
      id="experience"
      className="section section--alt"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <SectionHeading
          index="04"
          eyebrow="My Background"
          id="experience-title"
          title={<>Education & <em>Training.</em></>}
        />

        <ol role="list" className="timeline">
          {education.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 0.05}
              className="timeline__item"
            >
              <div className="timeline__when">
                <span className="timeline__period">
                  {item.period}
                </span>
              </div>

              <span className="timeline__node" aria-hidden="true" />

              <div className="timeline__card">
                <h3 className="timeline__role">
                  {item.title}
                </h3>

                <p className="timeline__company">
                  {item.institution}
                </p>

                <p className="timeline__summary">
                  {item.summary}
                </p>

                <ul role="list" className="tags">
                  {item.tech.map((skill) => (
                    <li key={skill} className="tag">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}