
import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { projects } from '../data/projects.js';
import SectionHeading from '../components/SectionHeading.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import ProjectModal from '../components/ProjectModal.jsx';

export default function Projects() {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState('All');
  const [openProject, setOpenProject] = useState(null);

  const categories = useMemo(
    () => ['All', ...new Set(projects.map((p) => p.category))],
    []
  );

  const visible = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-title"
    >
      <div className="container">

        <div className="projects__head">
          <SectionHeading
            index="03"
            eyebrow="My Projects"
            id="projects-title"
            title={
              <>
                My work & <em>projects.</em>
              </>
            }
          />

          {categories.length > 2 && (
            <div
              className="filters"
              role="group"
              aria-label="Filter projects by category"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`filter ${
                    filter === category ? 'is-active' : ''
                  }`}
                  aria-pressed={filter === category}
                  onClick={() => setFilter(category)}
                >
                  {category}

                  <span className="filter__count">
                    {category === 'All'
                      ? projects.length
                      : projects.filter(
                          (p) => p.category === category
                        ).length}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} projects
        </p>

        <motion.ul
          role="list"
          className="projects-grid"
          layout={!reduce}
        >
          <AnimatePresence initial={false} mode="popLayout">
            {visible.map((project, index) => (
              <motion.li
                key={project.id}
                layout={!reduce}
                initial={
                  reduce ? false : { opacity: 0, y: 16 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={
                  reduce
                    ? undefined
                    : { opacity: 0, scale: 0.98 }
                }
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={
                  index === 0 && filter === 'All'
                    ? 'projects-grid__feature'
                    : ''
                }
              >
                <ProjectCard
                  project={project}
                  index={projects.indexOf(project)}
                  onOpen={setOpenProject}
                />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

      </div>

      <ProjectModal
        project={openProject}
        onClose={() => setOpenProject(null)}
      />
    </section>
  );
}
