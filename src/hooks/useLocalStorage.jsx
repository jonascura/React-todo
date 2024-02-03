import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {


  const [ value, setValue ] = useState(() => {
    try {
      // see if anything is already written in local storage
      const localValue = window.localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (err) {
      console.log(err)
      return initialValue;
    }
  })

  // update local storage
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue]
}

export default useLocalStorage;