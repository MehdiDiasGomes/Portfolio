import bgImg from '/assets/img/bgProjectsCard.jpg';

export const projects = [
  {
    titleKey: 'projects.quizify.title',
    img: bgImg,
    descriptionKey: 'projects.quizify.description',
    link: 'https://quizify.example.com',
    iconTech: [
      { name: 'Git' },
      { name: 'TypeScript' },
      { name: 'Laravel' },
      { name: 'MySql' },
      { name: 'Nuxt' },
      { name: 'TailwindCSS' }
    ]
  },
  {
    titleKey: 'projects.portfolio.title',
    img: bgImg,
    descriptionKey: 'projects.portfolio.description',
    link: 'https://portfolio.example.com',
    iconTech: [
      { name: 'Git' },
      { name: 'TypeScript' },
      { name: 'Nuxt' },
      { name: 'TailwindCSS' }
    ]
  }
]