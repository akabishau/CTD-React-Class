import { useState, useEffect } from 'react';

function useLocalStorage(storageKey) {
  const [data, setData] = useState(() => readFromLocalStorage(storageKey));

  useEffect(() => {
    writeToLocalStorage(storageKey, data);
  }, [storageKey, data]);

  function readFromLocalStorage(key) {
    const localData = localStorage.getItem(key);
    return localData ? JSON.parse(localData) : null;
  }

  function writeToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  return [data, setData];
}

export default useLocalStorage;
