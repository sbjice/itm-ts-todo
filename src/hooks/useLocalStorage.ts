import { useCallback, useEffect, useRef, useState } from 'react';

// export const useLocalStorage = <T>(key: string, elements: Array<T>): [T[], ((T[]) => void)] => {
export const useLocalStorage = <T>(key: string, elements: Array<T>): [T[], (elems: T[]) => void] => {
  const [items, setItems] = useState<T[]>([]);

  let itemsFromLocalStorage = useRef<T[]>([]);
  useEffect(() => {
    if (localStorage.getItem(key) === null) {
      itemsFromLocalStorage.current = elements;
      localStorage.setItem(key, JSON.stringify(elements));
    } else {
      const itemsString = localStorage.getItem(key);
      itemsFromLocalStorage.current = JSON.parse(String(itemsString)) as T[];
    }
    setItems(itemsFromLocalStorage.current);
  }, [key, elements]);
  

  const updateTodos = useCallback((elems: T[]) => {
    localStorage.setItem(key, JSON.stringify(elems));
    setItems(elems);
  }, [key]);

  return [items, updateTodos];
}