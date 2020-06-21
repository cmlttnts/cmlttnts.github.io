import React, { useState, useEffect, useReducer } from 'react';

type StateType<T> = {
  isLoading: boolean;
  isError: boolean;
  isActive: boolean;
  data: T;
};

type ActionType<T> = {
  type: 'FETCH_NOT_ACTIVE_AT_MOUNT' | 'FETCH_INIT' | 'FETCH_SUCCESS' | 'FETCH_FAILURE';
  payload?: T;
};


function fetchReducer<T>(state: StateType<T>, action: ActionType<T>): StateType<T> {

  switch (action.type) {

    case 'FETCH_NOT_ACTIVE_AT_MOUNT':
      return {
        ...state,
        isActive: false,
      };
    case 'FETCH_INIT':
      return {
        ...state,
        isActive: true,
        isLoading: true,
        isError: false,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isActive: true,
        isLoading: false,
        isError: false,
        data: action.payload as T,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isActive: true,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error('Invalid Action');
  }

}


function useFetch<T>(initUrl: string, initialData: T, isActiveAtStart: boolean,
  initOptions?: RequestInit): [StateType<unknown>,
    React.Dispatch<React.SetStateAction<string>>,
    React.Dispatch<React.SetStateAction<boolean>>,
    React.Dispatch<React.SetStateAction<RequestInit | undefined>>] {

  const [url, setUrl] = useState<string>(initUrl);
  const [active, setActive] = useState<boolean>(isActiveAtStart);
  const [options, setOptions] = useState<RequestInit | undefined>(initOptions);

  const [state, dispatch] = useReducer(fetchReducer, {
    isLoading: false,
    isError: false,
    isActive: isActiveAtStart,
    data: initialData,
  });

  useEffect(() => {
    //if not active don't even try
    if (!active) {
      dispatch({ type: 'FETCH_NOT_ACTIVE_AT_MOUNT' });
      return (): void => { };
    }
    let isCanceled = false;

    const fetchData = async (): Promise<void> => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const res = await fetch(url, options);
        if (res.ok && !isCanceled) {
          const json = await res.json();
          dispatch({ type: 'FETCH_SUCCESS', payload: json });
        } else {
          throw new Error(`Error! Http Code:${res.status}`);
        }
      } catch (error) {
        if (!isCanceled) { dispatch({ type: 'FETCH_FAILURE' }); }
        console.log('catch clause', error);
      }
    };

    fetchData();
    return (): void => { isCanceled = true; };
  }, [url, options, active]);


  return [state, setUrl, setActive, setOptions];
}


export default useFetch;
