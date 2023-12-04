import { useState, useEffect } from 'react';

function useLocalStorage(key, initialData) {
  const [data, setData] = useState(() => {
    const localData = localStorage.getItem(key);
    return localData ? JSON.parse(localData) : initialData;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return [data, setData];
}

export default useLocalStorage;
