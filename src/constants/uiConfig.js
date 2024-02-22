export const EMPTY_LIST_MESSAGE = {
  title: "You don't have any TODOs now 🤔",
  action: "Let's start by creating the first one! 🚀"

  // TODO: Add Theme-specific messages
  /*
  mission: {
    title: "Mission dashboard clear, Commander 👩‍✈️👨‍✈️",
    action: "Strategize and assign new objectives. The field is yours! 📡"
  }
  */
};

import LogoClassic from '../assets/logo_classic.svg';
import LogoMission from '../assets/logo_mission.svg';

// TODO: Consider using smaller objects for each theme
export const THEMES = {
  classic: {
    selector: 'Classic View',
    icon: LogoClassic,
    navigation: {
      home: {
        path: '/',
        label: 'Home',
        heading: 'Things to Do'
      },
      settings: {
        path: '/settings',
        label: 'Settings',
        heading: 'Tune Your Experience'
      },
      about: {
        path: '/about',
        label: 'About',
        heading: 'Our Story',
        description:
          'This application serves as a digital checklist for your daily tasks. Keep track of what needs to be done and organize your day with ease.'
      }
    },
    buttons: {
      add: 'ADD',
      sort: 'Sort by Name'
      // remove icon button is configured in IconButtonStyles.js
    }
  },
  mission: {
    selector: 'Mission Impossible',
    icon: LogoMission,
    navigation: {
      home: {
        path: '/',
        label: 'Ops Center',
        heading: 'Mission Dashboard'
      },
      settings: {
        path: '/settings',
        label: 'Strategies',
        heading: 'Set You Strategies'
      },
      about: {
        path: '/about',
        label: 'HQ',
        heading: 'Intel Briefing',
        description:
          'Learn about the origins and objectives of our covert operations platform. Designed for elite operatives managing high-stakes tasks.'
      }
    },
    buttons: {
      add: 'ENGAGE',
      sort: 'Arrange by Objective'
      // remove icon button is configured in IconButtonStyles.js
    }
  }
};
