import { useState, useEffect } from 'react';

export const useLocalStorage = (keyName, keyNumber, defaultValue) => {
  const [name, setName] = useState(() => {
    try {
      return JSON.parse(window.localStorage.getItem(keyName)) ?? defaultValue;
    } catch (error) {
      console.log(error);
    }
  });

  const [number, setNumber] = useState(() => {
    try {
      return JSON.parse(window.localStorage.getItem(keyNumber)) ?? defaultValue;
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    window.localStorage.setItem(keyName, JSON.stringify(name));
  }, [name, keyName]);

  useEffect(() => {
    window.localStorage.setItem(keyNumber, JSON.stringify(number));
  }, [number, keyNumber]);

  return [name, number, setName, setNumber];
};
