/**
 * Project image, or a generated architectural cover when no screenshot is set.
 * Always 16:10 so the grid stays aligned.
 */
export default function ProjectCover({ project, priority = false }) {
  if (project.image) {
    return (
      <div className="cover">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          width="1600"
          height="1000"
        />
      </div>
    );
  }

  const accent = project.accent === 'gold' ? '#C6A56B' : '#27E0C3';
  const initials = project.title
    .split(/[\s—-]+/)
    .filter(Boolean)
    .slice(0, 1)
    .join('');

  return (
    <div className="cover cover--generated" aria-hidden="true">
      <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id={`grid-${project.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" stroke="#263440" strokeWidth=".6" />
          </pattern>
          <linearGradient id={`fade-${project.id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#131B24" stopOpacity="0" />
            <stop offset="1" stopColor="#0B0F14" stopOpacity=".9" />
          </linearGradient>
        </defs>
        <rect width="320" height="200" fill="#131B24" />
        <rect width="320" height="200" fill={`url(#grid-${project.id})`} />
        <g transform="translate(230 92)" fill="none" stroke={accent}>
          <polygon points="0,-58 50,-29 50,29 0,58 -50,29 -50,-29" strokeOpacity=".8" />
          <polygon points="0,-34 29,-17 29,17 0,34 -29,17 -29,-17" strokeOpacity=".35" />
          <line x1="0" y1="-58" x2="0" y2="58" strokeOpacity=".25" />
          <line x1="-50" y1="-29" x2="50" y2="29" strokeOpacity=".25" />
          <line x1="50" y1="-29" x2="-50" y2="29" strokeOpacity=".25" />
        </g>
        <rect width="320" height="200" fill={`url(#fade-${project.id})`} />
        <text x="22" y="176" fill="#F4F7FA" fillOpacity=".9" fontFamily="Instrument Serif, serif" fontSize="34">
          {initials}
        </text>
      </svg>
    </div>
  );
}
