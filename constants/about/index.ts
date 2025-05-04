import type { Experience } from "~/types/constants/about/Experience";
import type { Info } from "~/types/constants/about/Info";

export const personalFacts = [
  {
    icon: "📍",
    label: "about.personal.location.label",
    value: "about.personal.location.value",
  },
  {
    icon: "🎓",
    label: "about.personal.education.label",
    value: "about.personal.education.value",
  },
  {
    icon: "💼",
    label: "about.personal.experience.label",
    value: "about.personal.experience.value",
  },
  {
    icon: "🌐",
    label: "about.personal.languages.label",
    value: "about.personal.languages.value",
  },
];

export const socials = [
  { name: "GitHub", icon: "📁", link: "https://github.com/mehdidiasgomes" },
  {
    name: "LinkedIn",
    icon: "💼",
    link: "https://www.linkedin.com/in/mehdi-dias-gomes-94541a31a/",
  },
  {
    name: "Twitter",
    icon: "🐦",
    link: "https://x.com/mehdidgdev?s=21&t=82fBKMcEgjNyA5A8oFTGzA",
  },
  { name: "Email", icon: "📧", link: "mailto:diasgomes.dev@gmail.com" },
];

export const info: Info[] = [
  {
    icon: "Mail",
    label: "Contact",
    cta: true,
    link: "mailto:diasgomes.mehdicours@gmail.com",
  },
  {
    icon: "Linkedin",
    label: "Linkedin",
    cta: false,
    link: "https://linkedin.com/in/mehdi-dias-gomes-94541a31a",
  },
  {
    icon: "Github",
    label: "GitHub",
    cta: false,
    link: "https://github.com/MehdiDiasGomes",
  },
];

export const aboutExperience: Experience[] = [
  {
    title: "about.experience",
    icon: "WorkExperience",
    organization: {
      title: "about.experience.flippad.title",
      subTitle: "about.experience.flippad.subTitle",
      time: "about.experience.flippad.time",
      list: [
        {
          parag: "about.experience.flippad.firstInList.parag",
          usedTechnos: "about.experience.flippad.firstInList.usedTechnos",
          technos: 'Nuxt.js 3, TypeScript, Tailwind CSS, Laravel (Eloquent), MySQL, Docker',
        },
        {
          parag: "about.experience.flippad.secondInList.parag",
          usedTechnos: "about.experience.flippad.secondInList.usedTechnos",
          technos: "Nuxt.js, Bootstrap, JavaScript, Laravel"
        },
      ],
    },
  },
];

