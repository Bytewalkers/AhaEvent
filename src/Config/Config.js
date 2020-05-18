import AppStrings from './AppStrings';

const config = {
  appStrings: AppStrings,
  appName: 'Aha! Event',
  appAuthor: 'forksociety',
  appAuthorSite: 'https://forksociety.com',
  appAuthorEmail: 'os@forksociety.com',
  license: 'AGPL3.0',
  tagline: 'Showcasing FLOSS events, one at a time',
  menu: [
    {
      text: 'License',
      icon: 'copyright',
      link: '/license',
    },
    {
      text: 'Slack',
      icon: 'slack',
      link: '/slackinvite',
    },
    {
      text: 'GitHub',
      icon: 'github',
      link: '/github',
    },
    {
      text: 'Home',
      icon: 'home',
      link: '/',
    },
  ],
  redirectUrls: {
    event: '/',
    twitter: 'https://twitter.com/ahaevent',
    facebook: 'https://www.facebook.com/ahaevent',
    github: 'https://github.com/forksociety/ahaevent',
    gitlab: 'https://gitlab.com/forksociety/ahaevent',
    license: 'https://github.com/forksociety/AhaEvent/blob/master/LICENSE',
    credits: 'https://gitlab.com/forksociety/AhaEvent/blob/master/docs/CREDITS.md',
    slack: 'https://slack.forksociety.com',
    slackinvite: 'https://slack-invite.forksociety.com',
    submitevent: 'https://airtable.com/shrNqsWADOUnnO7Yz',
    report: 'https://gitlab.com/forksociety/AhaEvent/issues',
  },
  gaTrackingId: 'UA-84775604-4',
};

export default config;
