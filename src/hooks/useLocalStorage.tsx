import { useState, useEffect } from "react";

export const useLocalStorage = (
  keyName: string,
  keyNumber: string,
  defaultValue = ""
): [
  string,
  string,
  React.Dispatch<React.SetStateAction<string>>,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const [name, setName] = useState<string>(() => {
    try {
      const savedName = window.localStorage.getItem(keyName);

      return typeof savedName === "string"
        ? JSON.parse(savedName)
        : defaultValue;
    } catch (error) {
      console.log(error);
    }
  });

  const [number, setNumber] = useState<string>(() => {
    try {
      const savedNumber = window.localStorage.getItem(keyNumber);
      return typeof savedNumber === "string"
        ? JSON.parse(savedNumber)
        : defaultValue;
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
