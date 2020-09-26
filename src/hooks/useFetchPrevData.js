import { useState, useEffect } from 'react';
import { filters } from '../constants';

const useFetchPrevData = (filter) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (filter === filters.byDay)
      fetch('/datasets/ds3.json')
        .then((response) => response.json())
        .then((data) => {
          setData(data.map((_, index) => data[data.length - 1 - index]));
        });
    else
      fetch('/datasets/ds2.json')
        .then((response) => response.json())
        .then((data) => {
          setData(data.map((_, index) => data[data.length - 1 - index]));
        });
  }, [filter]);

  return data;
};

export default useFetchPrevData;
