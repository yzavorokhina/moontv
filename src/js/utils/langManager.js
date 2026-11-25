import { setLocalStorage, useLocalStorage } from './common';
import db from '../../db/dbHelper';

export const defaultLang = 'rus';
const langs = ['rus', 'eng'];
const storageKey = 'currentLang';

export const updateLang = (langId) => {
  console.log({ updateLang: langId });
  setLocalStorage(storageKey, langId);

  return langId;
}

export const getCurrentLang = () => {
  return useLocalStorage(storageKey, defaultLang);
}

export const setCurrentLang = () => {
  const currentLang = getCurrentLang(defaultLang);
  console.log({ currentLang });

  updateLang(currentLang);
  return currentLang;
}

export const setNextLang = () => {
  const currentLang = getCurrentLang();
  const currentIndex = langs.indexOf(currentLang);
  const nextIndex = (currentIndex + 1) % langs.length;

  console.log({ currentLang, currentIndex, nextIndex });
  return updateLang(langs[nextIndex]);
}

export const getElementByLang = (name, currentLang) => {
  const lang = db.localizationModel.getOneByName(currentLang);

  try {
    if (!lang || !lang[name]) {
      throw new Error(`Error: ${name} is not found for language ${currentLang}`)
    }

    return lang[name];
  } catch (error) {
    console.log(error.message || `Error: ${name} is not found for language ${currentLang}`);
    return "";
  }
}

export const getElement = (name) => {
  const currentLang = getCurrentLang();

  return getElementByLang(name, currentLang);
}