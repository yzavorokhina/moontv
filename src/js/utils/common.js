import { useState } from 'react';

export function getUrlParams() {
  const search = window.location.search;
  if (!search) return {};

  const params = new URLSearchParams(search);
  const obj = {};

  for (let [key, value] of params) {
    obj[key] = value;
  }

  return obj;
}

export const setLocalStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Ошибка записи в localStorage:', error);
  }
};

export const useLocalStorage = (key, initialValue) => {
  let storedValue = initialValue;
  try {
    const item = window.localStorage.getItem(key);
    storedValue = item ? JSON.parse(item) : initialValue;
    setLocalStorage(key, storedValue);
  } catch (error) {
    console.error('Ошибка чтения из localStorage:', error);
  }

  return storedValue;
}