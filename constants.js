export const METADATA = {
  author: "Sokem haile",
  title: "Portfolio | Sokemhaile",
  description:
    "sokem haile is a Frontend Developer from Ethiopia, interested in crafting beautiful and functional applications.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@Sokemsmoke",
  keywords: [
    "Sokem haile",
    "Frontend Developer",
    "Web Developer",
    "React Native Developer",
    "Software Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1690572126/preview.png",
  language: "English",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A TEENAGE DEVELOPER",
  "Learning programming",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: sokemhaile00@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/shubhporwal/",
  },
  {
    name: "github",
    url: "https://github.com/sokemhaile",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/sokem83/",
  },
  {
    name: "twitter",
    url: "https://twitter.com/Sokemsmoke",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "",
    // "cpp",
    // "java",
    // "python",
    "nodejs",
    "",
    "",
    "",
    // "moralis",
    // "stripe",
    "figma",
    ,
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
   ,
    ,
    ,
    ,
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "sanity-io"],
};

export const PROJECTS = [
  // {
  //   name: "Shotime",
  //   image: "",
  //   blurImage: "",
  //   description:
  //     "Developed with complete E-commerce functionality and User Authentication 🛍️",
  //   gradient: ["#FFCF1B", "#FF881B"],
  //   url: "https://shubh73-shotime.vercel.app/",
  //   tech: ["react", "tailwindcss", "redux", "mongodb", "stripe"],
  // },
  {
    name: "Smart agriculute",
    image: "/projects/airbnb.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "predicting disease predicting fertilzer and crops 🛏️",
    gradient: ["#F14658", "#DC2537"],
    url: "",
    tech: ["react", "nextjs", "tailwindcss", "mapbox"],
  },
  {
    name: "Flight booking app",
    image: "/projects/medium.webp",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "flight booking app ✍🏻",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "/",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "sanity.io"],
  },
  {
    name: "school manegment system",
    image: "/projects/inshorts.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "school manegment system with django 🎙",
    gradient: ["#000066", "#6699FF"],
    url: "/",
    tech: ["react", "chakra-ui", "alan"],
  },
  {
    name: "ecomerce web",
    image: "/projects/tesla.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "best Ecomerce web 🏎️",
    gradient: ["#142D46", "#2E4964"],
    url: "/tesla",
    tech: ["react"],
  },
];

export const WORK = [
  {
    id: 1,
    company: "INSA",
    title: "Developer",
    location: "Ethiopia, Adissababa",
    range: "December - Current",
    responsibilities: [
      "a summer camp for cyber talent.",
      "Learning programming and creating some connection and dreaming my future.",
      "starting salary 9k ETB.",
    ],
    url: "https://mydukaan.io/",
    video: "/work/dukaan.mp4",
  },
  {
    id: 2,
    company: "Avation ",
    title: "Frontend Developer Intern",
    location: "Ethiopia",
    range: "May - October 2022",
    responsibilities: [
      "built booking app for them to use.",
      "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
      "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
    ],
    url: "https://www.aviate.jobs/",
    video: "/work/aviate.mp4",
  },
  {
    id: 3,
    company: "",
    title: "",
    location: "",
    range: "",
    responsibilities: [
      ".",
      ".",
      ".",
    ],
    url: "https://spacenos.com/",
    video: "/work/spacenos.mp4",
  },
];

export const GTAG = "G-5HCTL2TJ5W";
