const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://www.linkedin.com/in/wesley-fernandess',
  title: 'WF.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Wesley Fernandes',
  role: 'Software Engineer',
  description:
    'Software engineer with over 4 years of diverse experience demonstrating  a track record of driving brand growth and enhancing development strategies. Known for a strategic approach with gitflow to develop and execute comprehensive development strategies, achieving significant improvements in demand delivery.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/wesley-fernandess',
    github: 'https://github.com/w3sll3y',
  },
}

const projects = [
  {
    name: 'Market-App',
    description:
      'Mobile project for managing monthly purchases.',
    stack: ['React Native', 'TypeScript', 'Styled-Components'],
    sourceCode: 'https://github.com/w3sll3y/market-app',
    livePreview: 'https://github.com/w3sll3y/market-app',
  },
  {
    name: 'Market-API',
    description:
      'BackEnd of the MarketApp, where users and lists are managed.',
    stack: ['NestJS', 'TypeScript', 'REST-API'],
    sourceCode: 'https://github.com/w3sll3y/market-api',
    livePreview: 'https://github.com/w3sll3y/market-api',
  },
  {
    name: 'Project 3',
    description:
      'This project serves as a very slim backend designed to work with ExpressJs and SQL like BD. In this project is possible create an user, login, create transactions of payments and list all transactions.',
    stack: ['Express', 'Javascript', 'SQL'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  'SCRUM',
  'Git',
  'GitFlow',
  'JavaScript',
  'TypeScript',
  'ReactJS',
  'React Native',
  'NextJS',
  'VueJS',
  'Styled-Components',
  'Tailwind',
  'Bootstrap',
  'NodeJS',
  'NestJS',
  'ExpressJS',
  'MongoDB',
  'PostgreSQL',
  'VTEX',
]

const contact = {
  email: 'fernandess.weslley@gmail.com',
}

export { header, about, projects, skills, contact }
