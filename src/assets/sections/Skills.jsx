
const skillGroups = [
  {
    title: 'Frontend Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap'],
  },
  {
    title: 'Backend Development',
    skills: ['Python', 'Django', 'Node.js', 'Express.js'],
  },
  {
    title: 'Database',
    skills: ['SQL', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
  {
    title: 'Embedded Systems',
    skills: ['Embedded C', 'Arduino', 'VLSI'],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section"
      style={{
        padding: '100px 20px',
        background: '#0b0f12',
        color: '#f5f5f5',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: 'auto' }}>
        <p
          style={{
            color: '#20d9bd',
            fontSize: '15px',
            letterSpacing: '2px',
          }}
        >
          02 — MY EXPERTISE
        </p>

        <h2
          style={{
            fontSize: '42px',
            color: '#f5f5f5',
            marginBottom: '12px',
          }}
        >
          My Technical <span style={{ color: '#c9a76b' }}>Skills.</span>
        </h2>

        <p style={{ color: '#9ca9b5', marginBottom: '40px' }}>
          Technologies and tools I have learned and used in my projects.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '22px',
          }}
        >
          {skillGroups.map((group) => (
            <div
              key={group.title}
              style={{
                background: '#111820',
                padding: '28px',
                borderRadius: '16px',
                border: '1px solid #29343e',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#20d9bd';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#29343e';
              }}
            >
              <h3
                style={{
                  fontSize: '20px',
                  color: '#ffffff',
                  marginBottom: '22px',
                }}
              >
                {group.title}
              </h3>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                }}
              >
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: '9px 14px',
                      background: '#153b38',
                      color: '#48dfc3',
                      border: '1px solid #24554e',
                      borderRadius: '25px',
                      fontSize: '14px',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
