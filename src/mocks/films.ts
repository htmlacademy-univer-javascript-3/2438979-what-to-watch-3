import { Film } from '../types/types';
import { videoSource } from './video-source';

export const films: Film[] = [
  {
    id: 1,
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    imageSource: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    videoSource: videoSource,
  },
  {
    id: 2,
    title: 'Bohemian Rhapsody',
    imageSource: 'img/bohemian-rhapsody.jpg',
    videoSource: videoSource,
  },
  {
    id: 3,
    title: 'Macbeth',
    imageSource: 'img/macbeth.jpg',
    videoSource: videoSource,
  },
  {
    id: 4,
    title: 'Aviator',
    imageSource: 'img/aviator.jpg',
    videoSource: videoSource,
  },
  {
    id: 5,
    title: 'We need to talk about Kevin',
    imageSource: 'img/we-need-to-talk-about-kevin.jpg',
    videoSource: videoSource,
  },
  {
    id: 6,
    title: 'What We Do in the Shadows',
    imageSource: 'img/what-we-do-in-the-shadows.jpg',
    videoSource: videoSource,
  },
  {
    id: 7,
    title: 'Revenant',
    imageSource: 'img/revenant.jpg',
    videoSource: videoSource,
  },
  {
    id: 8,
    title: 'Johnny English',
    imageSource: 'img/johnny-english.jpg',
    videoSource: videoSource,
  }
];
