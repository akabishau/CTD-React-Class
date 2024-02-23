import { useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

function useTodoManager(list) {
  const [titleAscOrder, setTitleAscOrder] = useLocalStorage(
    'titleAscOrder',
    true
  );

  const sortListByTitle = list => {
    return [...list].sort((a, b) => {
      return titleAscOrder
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    });
  };

  // returns value
  // 2 args: function, array of dependencies
  const sortedList = useMemo(() => {
    return sortListByTitle(list);
  }, [titleAscOrder, list]);

  return { sortedList, titleAscOrder, setTitleAscOrder };
}

export default useTodoManager;
