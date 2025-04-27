import bgWip from '/assets/img/wip.png';
import portfolioImg from '/assets/img/portfolioProject.png';

export const projects = [
  {
    titleKey: 'projects.quizify.title',
    img: bgWip,
    alt: 'Bannière quizify',
    descriptionKey: 'projects.quizify.description',
    link: 'https://quizify.example.com',
    sheet: 'QuizifyProject',
    inDevelopment: true,
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
    img: portfolioImg,
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
  //     { name: 'MySql' },
  //   ]
  // }
]