import { Film } from '../types/films';
import { videoSource } from './video-source';

export const films: Film[] = [
  {
    id: 1,
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    previewVideoLink: videoSource,
    genre: 'Comedies',
  },
  {
    id: 2,
    name: 'Bohemian Rhapsody',
    previewImage: 'img/bohemian-rhapsody.jpg',
    previewVideoLink: videoSource,
    genre: 'Crime',
  },
  {
    id: 3,
    name: 'Macbeth',
    previewImage: 'img/macbeth.jpg',
    previewVideoLink: videoSource,
    genre: 'Documentary',
  },
  {
    id: 4,
    name: 'Aviator',
    previewImage: 'img/aviator.jpg',
    previewVideoLink: videoSource,
    genre: 'Dramas',
  },
  {
    id: 5,
    name: 'We need to talk about Kevin',
    previewImage: 'img/we-need-to-talk-about-kevin.jpg',
    previewVideoLink: videoSource,
    genre: 'Horror',
  },
  {
    id: 6,
    name: 'What We Do in the Shadows',
    previewImage: 'img/what-we-do-in-the-shadows.jpg',
    previewVideoLink: videoSource,
    genre: 'KidsAndFamily',
  },
  {
    id: 7,
    name: 'Revenant',
    previewImage: 'img/revenant.jpg',
    previewVideoLink: videoSource,
    genre: 'Romance',
  },
  {
    id: 8,
    name: 'Johnny English',
    previewImage: 'img/johnny-english.jpg',
    previewVideoLink: videoSource,
    genre: 'SciFi',
  },
];
