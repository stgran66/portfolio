import { images } from '../images';

const { webStudio, filmApp, barbershop, phonebook, icecream, contactsRestApi } =
  images;

export const projects = [
  {
    title: 'Web Studio',
    technologies: ['HTML', 'CSS', 'SASS', 'RWD', 'GIT'],
    link: 'https://stgran66.github.io/webstudio/',
    description: 'Website for a web studio with an adaptive layout.',
    image: webStudio,
    repoLink: 'https://github.com/stgran66/webstudio',
  },
  {
    title: 'Phonebook',
    technologies: [
      'React',
      'Redux',
      'Redux-Persist',
      'Webpack',
      'Git',
      'REST API',
    ],
    link: 'https://stgran66.github.io/react-phonebook',
    description: `Webapp for storing your contacts, with registration and authentication`,
    image: phonebook,
    repoLink: 'https://github.com/stgran66/react-phonebook',
  },
  {
    title: 'Contacts REST API',
    technologies: [
      'Node.js',
      'Express',
      'MongoDB',
      'MongoDB Atlas',
      'Mongoose',
      'JEST',
    ],
    link: 'https://github.com/stgran66/nodejs-homework-rest-api',
    description:
      'REST API written in Node.js used to store registered users contacts in MongoDB Atlas.',
    image: contactsRestApi,
    repoLink: 'https://github.com/stgran66/nodejs-homework-rest-api',
  },
  {
    title: 'FilmApp',
    technologies: [
      'HTML',
      'CSS',
      'SASS',
      'JS',
      'AJAX',
      'Git',
      'Parcel',
      'REST API',
      'Firebase Authentication',
      'Firestore',
    ],
    link: 'https://protsyukprits.github.io/movie-team-project/',
    description: `Web application for browsing and saving movies, already watched and yet to watch. 
Role: developer. Wrote code for Firebase Authentication and created Firestore DB to store users' films.`,
    image: filmApp,
    repoLink: 'https://github.com/ProtsyukPrits/Filmoteka',
  },
  {
    title: 'Barbershop',
    technologies: ['HTML', 'CSS', 'SASS', 'RWD', 'GIT'],
    link: 'https://stgran66.github.io/barbershop/',
    description: 'Website for local barbershop with responsive design.',
    image: barbershop,
    repoLink: 'https://github.com/stgran66/barbershop',
  },
  {
    title: 'Icecream shop',
    technologies: ['HTML', 'CSS', 'SASS', 'RWD', 'GIT'],
    link: 'https://github.com/stgran66/icecream',
    description: 'Website for a small icecream store with an adaptive layout.',
    image: icecream,
    repoLink: 'https://github.com/stgran66/icecream',
  },
];
