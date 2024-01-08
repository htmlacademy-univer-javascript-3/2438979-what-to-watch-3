import { Film } from '../types/types';
import { videoSource } from './video-source';
import { GenreType } from '../constants/genre-type';

export const films: Film[] = [
  {
    id: 1,
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    imageSource: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    videoSource: videoSource,
    genre: GenreType.Comedies,
  },
  {
    id: 2,
    title: 'Bohemian Rhapsody',
    imageSource: 'img/bohemian-rhapsody.jpg',
    videoSource: videoSource,
    genre: GenreType.Crime,
  },
  {
    id: 3,
    title: 'Macbeth',
    imageSource: 'img/macbeth.jpg',
    videoSource: videoSource,
    genre: GenreType.Documentary,
  },
  {
    id: 4,
    title: 'Aviator',
    imageSource: 'img/aviator.jpg',
    videoSource: videoSource,
    genre: GenreType.Dramas,
  },
  {
    id: 5,
    title: 'We need to talk about Kevin',
    imageSource: 'img/we-need-to-talk-about-kevin.jpg',
    videoSource: videoSource,
    genre: GenreType.Horror,
  },
  {
    id: 6,
    title: 'What We Do in the Shadows',
    imageSource: 'img/what-we-do-in-the-shadows.jpg',
    videoSource: videoSource,
    genre: GenreType.KidsAndFamily,
  },
  {
    id: 7,
    title: 'Revenant',
    imageSource: 'img/revenant.jpg',
    videoSource: videoSource,
    genre: GenreType.Romance,
  },
  {
    id: 8,
    title: 'Johnny English',
    imageSource: 'img/johnny-english.jpg',
    videoSource: videoSource,
    genre: GenreType.SciFi,
  }
];
