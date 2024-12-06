import {
  GUIDE_IMG_EXTENSION,
  URL_IMG_PERSON,
  SWAPI_ROOT,
  SWAPI_PEOPLE,
} from '../constants/constants';

const getId = (url: string, category: string) => {
  const baseUrl = `${SWAPI_ROOT}${category}/`;

  return url.replace(baseUrl, '').split('/')[0];
};

export const getPeopleId = (url: string) => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = (id: string) =>
  `${URL_IMG_PERSON}/${id}${GUIDE_IMG_EXTENSION}`;
