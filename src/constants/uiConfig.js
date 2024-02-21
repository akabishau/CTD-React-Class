export const EMPTY_LIST_MESSAGE = {
  title: "You don't have any TODOs now 🤔",
  action: "Let's start by creating the first one! 🚀"
};

import LogoClassic from '../assets/logo_classic.svg';
import LogoMission from '../assets/logo_mission.svg';
import { GiMineExplosion as RemoveMission } from 'react-icons/gi';
import { MdOutlineRemoveCircle as RemoveClassic } from 'react-icons/md';

export const THEMES = {
  classic: {
    selector: 'Classic View',
    icon: LogoClassic,
    navigation: {
      home: {
        path: '/',
        label: 'Home',
        heading: 'My List'
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
      remove: RemoveClassic,
      sort: 'Sort by Name'
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
      add: 'DEPLOY',
      remove: RemoveMission,
      sort: 'Arrange by Objective'
    }
  }
};
