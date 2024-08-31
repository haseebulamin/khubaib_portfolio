import { Github, Twitter, Figma, Linkedin } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoAngular from '/public/images/logos/angular.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoNest from '/public/images/logos/icon-nest.svg';
import LogoRxjs from '/public/images/logos/rxjs.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoSQL from '/public/images/logos/microsoft-sql-server.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import Logolinkedin from '/public/images/logos/linkedin.svg';
import LogoNgrx from '/public/images/logos/ngrx.svg';
import LogoCypressLight from '/public/images/logos/icon-cypress-light.svg';
import LogoStorybook from '/public/images/logos/icon-storybook.svg';
import LogoGit from '/public/images/logos/git.svg';
import LogoBoots from '/public/images/logos/bt.svg';

import LogoCedar from '/public/images/logos/login-logo.png';
import LogoCrem from '/public/images/logos/crem.svg';
import LogoGreenApexLight from '/public/images/logos/logo-greenapex-light.svg';
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg';
import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel-light.svg';

import ProjectFiskil from '/public/images/project-fiskil.png';
import ProjectCollectCo from '/public/images/CollectCo.png';
import ProjectCGS from '/public/images/CGS.png';

import AvatarKrisztian from '/public/images/avatar-krisztian.png';
import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/Khubaib-Ul-Amin',
  GITHUB_REPO: 'https://github.com/Khubaib-Ul-Amin',
  TWITTER: 'https://x.com/khebiSays_here',
  LINKEDIN: 'https://www.linkedin.com/in/khubaib-ul-amin?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  FIGMA: 'https://www.figma.com/@khubaibulamin',
  FIGMA_FILE:
    'https://www.figma.com/@khubaibulamin',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Community',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/Khubaib-Ul-Amin',
  },
  {
    icon: Twitter,
    url: 'https://x.com/khebiSays_here',
  },
  {
    icon: Figma,
    url: 'https://www.figma.com/@khubaibulamin',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/khubaib-ul-amin?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Angular',
    logo: LogoAngular,
    url: 'https://angular.dev/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'RxJs',
    logo: LogoRxjs,
    url: 'https://rxjs.dev/',
  },
  {
    label: 'Socket.io',
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: 'https://socket.io/',
  },
  {
    label: 'SQL',
    logo: LogoSQL,
    url: 'https://www.w3schools.com/sql/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
  {
    label: 'NgRx',
    logo: LogoNgrx,
    // darkModeLogo: LogoCypressLight,
    url: 'https://ngrx.io/',
  },
  {
    label: 'Bootstrap',
    logo: LogoBoots,
    url: 'https://getbootstrap.com/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoCedar,
    logoAlt: 'Cedar logo',
    position: 'Software Engineer',
    startDate: new Date(2022, 8),
    currentlyWorkHere: true,
    summary: [
      'Implemented Angular for frontend development, integrating third-party APIs for enhanced functionality.',
      'Orchestrated backend integrations, leveraging Angular features such as RxJS for reactive programming, lazy loading, Angular testing with CLI, and more to enhance operational efficiency.',
    ],
  },
  {
    logo: LogoCrem,
    // darkModeLogo: LogoGreenApexLight,
    logoAlt: 'Crem logo',
    position: 'Frontend Developer',
    startDate: new Date(2021, 4),
    endDate: new Date(2022, 8),
    summary: [
      'Created reusable components using Ant Design for a healthcare application.',
      'Incorporated Bootstrap CSS into a visa application project to improve UI/UX.',
      'Utilized Git, CLI, and NPM for version control and package management.',
      'Leveraged TypeScript, and Javascript expertise to deliver responsive frontend solutions.',
      'Handled sprint planning & task distribution.',
    ],
  },
  // {
  //   logo: LogoDotnpixel,
  //   darkModeLogo: LogoDotnpixelLight,
  //   logoAlt: 'Dotnpixel logo',
  //   position: 'Full Stack Developer',
  //   startDate: new Date(2015, 11),
  //   endDate: new Date(2017, 4),
  //   summary: ['Worked as a full stack developer (React / Laravel).'],
  // },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'CollectCo',
    description:
      'A platform that enhances daily debt collection efficiency for banks and credit unions through intuitive interfaces and robust backend integration with Intelligent Banking Solutions™, showcasing advanced skills in agile development and optimizing financial operations for improved collection outcomes.',
    url: 'https://beta.collectco.com/',
    previewImage: ProjectCollectCo,
    technologies: [
      'Angular',
      'Typescript',
      'Primeflex',
      'PrimeNg',
      'Azure',
      '.Net',
      'SQL',
      'Styled Components',
      'RxJs',
      'NgRx',
    ],
  },
  {
    name: 'Fiskil',
    description:
      'A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.',
    url: 'https://fiskil.com.au',
    previewImage: ProjectFiskil,
    technologies: [
      'React',
      'Redux',
      'Javascript',
      'React Bootstrap',
      'Node js',
      'DMZ',
    ],
  },
  {
    name: 'Cedar Global Solutions',
    description:
      'Developed a machine learning-based system using the MEAN stack to automate the screening of candidate resumes for IT jobs, utilizing natural language processing to extract and analyze skills and experience.',
    url: 'https://gentle-biscotti-796f7b.netlify.app',
    previewImage: ProjectCGS,
    technologies: [
      'React',
      'Node.js',
      'Javascript',
      'Boostrap',
      'Redux',
      'MongoDB',
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Mubeen Akhtar',
    personAvatar: AvatarKrisztian,
    title: 'Sr SQA Engineer - HBL',
    testimonial:
      'Job well done! I am really impressed. He is very very good at what he does:) I would recommend khubaib and will rehire in the future for Frontend development.',
  },
  {
    personName: 'Zubair Ul Amin',
    personAvatar: AvatarEugen,
    title: 'Software Engineer - Zapta',
    testimonial:
      'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
  },
  {
    personName: 'Haseeb Ul Amin',
    personAvatar: AvatarDummy,
    title: 'React - Freelancer',
    testimonial:
      'Khubiab was extremely easy and pleasant to work with and he truly cares about the project being a success. Khubiab has a high level of knowledge and was able to work on my MERN stack application.',
  },
];
