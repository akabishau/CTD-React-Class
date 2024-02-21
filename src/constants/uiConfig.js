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
    heading: 'My List',
    selector: 'Classic',
    icon: LogoClassic,
    navigation: {
      home: {
        path: '/',
        label: 'Home'
      },
      settings: {
        path: '/settings',
        label: 'Settings'
      },
      about: {
        path: '/about',
        label: 'About'
      }
    },
    buttons: {
      add: 'ADD',
      remove: RemoveClassic,
      sort: 'Sort by Name'
    }
  },
  mission: {
    heading: 'My Missions',
    selector: 'Mission Impossible',
    icon: LogoMission,
    navigation: {
      home: {
        path: '/',
        label: 'Missions'
      },
      settings: {
        path: '/settings',
        label: 'Tactics'
      },
      about: {
        path: '/about',
        label: 'Headquarters'
      }
    },
    buttons: {
      add: 'DEPLOY',
      remove: RemoveMission,
      sort: 'Arrange by Title'
    }
  }
};
