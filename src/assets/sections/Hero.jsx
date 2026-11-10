import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Download, MapPin } from 'lucide-react';
import { site } from '../data/site.js';
import Button from '../components/Button.jsx';
import SocialLinks from '../components/SocialLinks.jsx';
import HeroPortrait from '../components/HeroPortrait.jsx';
import { useFileExists } from '../hooks/useFileExists.js';

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduce = useReducedMotion();
  const hasResume = useFileExists(site.resumeUrl);

  const rise = (delay) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease, delay } };

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__grid" />
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          {site.availability?.open && (
            <motion.p className="status" {...rise(0)}>
              <span className="status__dot" aria-hidden="true" />
              {site.availability.label}
            </motion.p>
          )}

          <motion.h1 id="hero-title" className="hero__title" {...rise(0.08)}>
            <span className="hero__role">{site.role}</span>
            <span className="hero__line">{site.headline[0]}</span>{' '}
            <em className="hero__line hero__line--accent">{site.headline[1]}</em>
          </motion.h1>

          <motion.p className="hero__intro" {...rise(0.18)}>
            {site.intro}
          </motion.p>

          <motion.div className="hero__actions" {...rise(0.26)}>
            <Button href="#projects" size="lg" icon={ArrowDown}>
              Explore my work
            </Button>
            {hasResume && (
              <Button href={site.resumeUrl} variant="ghost" size="lg" icon={Download} download external={false}>
                Download résumé
              </Button>
            )}
          </motion.div>

          <motion.div className="hero__foot" {...rise(0.34)}>
            <SocialLinks />
            {site.location && (
              <span className="hero__loc">
                <MapPin size={14} aria-hidden="true" /> {site.location}
              </span>
            )}
          </motion.div>
        </div>

        <motion.div className="hero__visual" {...rise(0.2)}>
          <div className="hero__plinth" aria-hidden="true" />
          <HeroPortrait src={site.portrait} framed={site.portraitFramed} monogram={site.monogram} reducedMotion={!!reduce} alt={`Portrait of ${site.name}`} />
        </motion.div>
      </div>

      <a href="#about" className="hero__scroll">
        <span>Scroll</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
