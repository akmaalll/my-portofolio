module.exports = {
  siteTitle: 'Akmal Rayadil Fitrah',
  siteDescription:
    'Chandrika Deb is a Software Developer at Amdocs, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Chandrika Deb, Chandrika, Deb, chandrikadeb7, software developer, software engineer, content freelancer, face mask, face mask detection, web developer, java developer, pepper content, jamshedpur, amdocs, bit, mesra',
  siteUrl: 'https://chandrikadeb7.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Akmal Rayadil Fitrah',
  location: 'Makassar, Indonesia',
  email: 'akmalrayadilfitrah@gmail.com',
  github: 'https://github.com/akmaalll',
  twitterHandle: '@chandrikadeb7',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/akmaalll',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/akmal-rayadil-fitrah-a42459270/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/akmlrydlftrh/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
