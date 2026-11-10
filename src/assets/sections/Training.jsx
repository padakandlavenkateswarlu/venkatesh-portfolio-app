
import {
  GraduationCap,
  Code,
  Cpu,
  Database,
  BookOpen,
} from 'lucide-react';

import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';

const learningAreas = [
  {
    icon: Code,
    title: 'Python Full Stack Development',
    description:
      'Learning and building web applications using Python, Django, React.js, JavaScript, HTML and CSS.',
    technologies: ['Python', 'Django', 'React.js', 'JavaScript'],
  },
  {
    icon: Database,
    title: 'Database Technologies',
    description:
      'Working with databases to understand data storage, queries and application integration.',
    technologies: ['SQL', 'MySQL', 'MongoDB'],
  },
  {
    icon: Cpu,
    title: 'Embedded Systems',
    description:
      'Applying electronics and programming knowledge through academic projects involving microcontrollers and sensors.',
    technologies: ['Embedded C', 'Arduino', 'Sensors'],
  },
  {
    icon: BookOpen,
    title: 'VLSI & Electronics',
    description:
      'Building foundational knowledge in digital electronics and VLSI concepts through my ECE academic background.',
    technologies: ['Digital Electronics', 'VLSI Fundamentals'],
  },
];

export default function Training() {
  return (
    <section
      id="training"
      className="section"
      aria-labelledby="training-title"
    >
      <div className="container">

        <SectionHeading
          index="05"
          eyebrow="Technical Learning"
          id="training-title"
          title={
            <>
              Learning, building & <em>growing.</em>
            </>
          }
          lede="My technical learning journey combines software development with my academic background in Electronics and Communication Engineering."
        />

        <Reveal className="training__head">
          <p className="training__eyebrow">
            <GraduationCap size={16} aria-hidden="true" />
            Academic Background
          </p>

          <div className="training__place">
            <span className="training__place-name">
              B.Tech – Electronics and Communication Engineering
            </span>

            <span className="training__place-loc">
              QIS College of Engineering and Technology, Ongole
            </span>

            <span className="training__place-loc">
              2022 – 2026 | CGPA: 8.01
            </span>
          </div>
        </Reveal>

        <div className="training__topics">
          {learningAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <Reveal
                key={area.title}
                delay={index * 0.06}
                className="training__place"
              >
                <div className="training__eyebrow">
                  <Icon size={18} aria-hidden="true" />
                  {area.title}
                </div>

                <p>{area.description}</p>

                <ul role="list" className="tags">
                  {area.technologies.map((technology) => (
                    <li key={technology} className="tag">
                      {technology}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
