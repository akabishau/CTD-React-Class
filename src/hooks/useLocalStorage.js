import { useState, useEffect } from 'react';

function useLocalStorage(key) {
  const [data, setData] = useState(() => {
    console.log(`checking for saved data for ${key} in local storage`);
    const localData = localStorage.getItem(key);
    return localData ? JSON.parse(localData) : null;
  });

  useEffect(() => {
    console.log('about to save changes in the local storage');
    if (data !== null) {
      localStorage.setItem(key, JSON.stringify(data));
    }
  }, [key, data]);

  return [data, setData];
}

export default useLocalStorage;
