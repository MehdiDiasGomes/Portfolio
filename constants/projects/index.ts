import bgImg from '/assets/img/bgProjectsCard.jpg';

export const projects = [
  {
    titleKey: 'projects.quizify.title',
    img: bgImg,
    alt: 'Bannière quizify',
    descriptionKey: 'projects.quizify.description',
    link: 'https://quizify.example.com',
    sheet: 'QuizifyProject',
    inDevelopment: true,
    iconTech: [
      { name: 'Git' },
      { name: 'TypeScript' },
      { name: 'Laravel' },
      { name: 'MySQL' },
      { name: 'Nuxt' },
      { name: 'TailwindCSS' }
    ]
  },
  {
    titleKey: 'projects.portfolio.title',
    img: bgImg,
    alt: 'Bannière portfolio',
    descriptionKey: 'projects.portfolio.description',
    link: 'https://portfolio.example.com',
    sheet: 'PortfolioProject',
    inDevelopment: false,
    iconTech: [
      { name: 'Git' },
      { name: 'TypeScript' },
      { name: 'Nuxt' },
      { name: 'TailwindCSS' }
    ]
  },
  // {
  //   titleKey: 'projects.fp.title',
  //   img: bgImg,
  //   alt: 'Bannière fiches pédagogiques',
  //   descriptionKey: 'projects.fp.description',
  //   link: 'https://fp.example.com',
  //   sheet: 'FpProject',
  //   inDevelopment: true,
  //   iconTech: [
  //     { name: 'Git' },
  //     { name: 'TypeScript' },
  //     { name: 'Nuxt' },
  //     { name: 'TailwindCSS' },
  //     { name: 'Laravel' },
  //     { name: 'MySQL' },
  //   ]
  // }
]