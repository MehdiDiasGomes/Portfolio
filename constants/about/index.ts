import type { Education } from "~/types/constants/about/Education";
import type { Experience } from "~/types/constants/about/Experience";
import type { Info } from "~/types/constants/about/Info";
import type { Skill } from "~/types/constants/about/Skill";

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
  // {
  //   icon: "Mail",
  //   label: "Contact",
  //   cta: true,
  //   link: "mailto:diasgomes.mehdicours@gmail.com",
  // },
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
      title: "about.experience.maanos.title",
      subTitle: "about.experience.maanos.subTitle",
      time: "about.experience.maanos.time",
      list: [
        {
          parag: "about.experience.maanos.firstInList.parag",
          usedTechnos: "about.experience.maanos.firstInList.usedTechnos",
          technos: "about.experience.maanos.firstInList.technos",
        },
      ],
    },
  },
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
          technos: "about.experience.flippad.firstInList.technos",
        },
        {
          parag: "about.experience.flippad.secondInList.parag",
          usedTechnos: "about.experience.flippad.secondInList.usedTechnos",
          technos: "about.experience.flippad.secondInList.technos",
        },
      ],
    },
  },
];

export const skills: Skill[] = [
  // Front-end
  {
    title: "TypeScript",
    subTitle: "Front end",
    icon: "TypeScript",
    flame: true,
  },
  { title: "Nuxt.js", subTitle: "Front end", icon: "Nuxt", flame: true },

  // Back-end
  { title: "PHP", subTitle: "Back end", icon: "PHP", flame: true },
  { title: "Laravel", subTitle: "Back end", icon: "Laravel", flame: true },
  { title: "Node.js", subTitle: "Back end", icon: "Node", flame: true },

  // Base de données
  { title: "MySQL", subTitle: "Base de données", icon: "MySql", flame: true },

  // DevOps & Cloud
  { title: "Docker", subTitle: "DevOps", icon: "Docker", flame: true },
  { title: "AWS", subTitle: "Cloud", icon: "AWS", flame: true },

  // Outils
  { title: "Git", subTitle: "Versioning", icon: "Git", flame: true },

  // --- Compétences masquées ---
  // {
  //   title: "JavaScript",
  //   subTitle: "Front end",
  //   icon: "JavaScript",
  //   flame: true,
  // },
  // { title: "React.js", subTitle: "Front end", icon: "React" },
  // {
  //   title: "Tailwind CSS",
  //   subTitle: "Front end",
  //   icon: "TailwindCSS",
  //   flame: true,
  // },
  // { title: "Vue.js", subTitle: "Front end", icon: "Vue", flame: true },
  // { title: "Astro", subTitle: "Front end", icon: "Astro" },
  // { title: "MongoDB", subTitle: "Base de données", icon: "MongoDB" },
  // { title: "Figma", subTitle: "Design", icon: "Figma", flame: true },
];

export const education: Education[] = [
  {
    title: "about.education.mns.title",
    subTitle: "about.education.mns.subTitle",
    time: "about.education.mns.time",
    icon: "Mns",
    parag: "about.education.mns.parag",
  },
  {
    title: "about.education.labriquerie.title",
    subTitle: "about.education.labriquerie.subTitle",
    time: "about.education.labriquerie.time",
    icon: "Labriquerie",
    parag: "about.education.labriquerie.parag",
  },
];
