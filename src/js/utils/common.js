import { useState, useEffect } from 'react';

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

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Ошибка чтения из localStorage:', error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Ошибка записи в localStorage:', error);
    }
  };

  return [storedValue, setValue];
}