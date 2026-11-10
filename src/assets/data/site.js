
export const site = {
  name: 'Padakandla Venkateswarlu',
  monogram: 'PV',
  portrait: '/portrait.webp.png',
  portraitFramed: true,

  role: 'Aspiring Python Full Stack Developer',
  company: '',
  location: 'Hyderabad, India',

  headline: [
    'Building web experiences',
    'with Python and React.'
  ],

  intro:
    'I am a B.Tech ECE graduate and aspiring Python Full Stack Developer passionate about building responsive web applications using Python, Django, React, JavaScript and SQL.',

  availability: {
    open: true,
    label: 'Open to Fresher Opportunities'
  },

  resumeUrl: 'https://drive.google.com/file/d/14SozwXcQRJDDHzs7ATCqBPKTIJDzmKQw/view?usp=drive_link',

  email: 'padakandlavenkatesh5@gmail.com',

  social: {
    github: 'https://github.com/padakandlavenkateswarlu',
    linkedin: 'https://www.linkedin.com/in/padakandla-venkateswarlu-323056282/',
    instagram: '',
    twitter: '',
  },

  about: {
    summary: [
      'I am a B.Tech Electronics and Communication Engineering graduate interested in Python Full Stack Development.',
      'I have worked on academic and personal projects using Python, React, HTML, CSS, JavaScript, Django and SQL. I am eager to learn new technologies and start my career as a software developer.'
    ],

    philosophy: [
      {
        title: 'Clean Code',
        text: 'Writing simple, readable and maintainable code.'
      },
      {
        title: 'Continuous Learning',
        text: 'Improving technical skills by learning and building projects.'
      },
      {
        title: 'Problem Solving',
        text: 'Understanding problems and developing practical solutions.'
      },
    ],

    goals:
      'Looking for an opportunity as a Python Full Stack Developer where I can apply my skills, learn from experienced developers and grow professionally.',
  },

  stats: [
    { label: 'Work Experience', value: null },
    { label: 'Academic Projects', value: '4' },
    { label: 'Technical Skills', value: 10 },
  ],

  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
};
