import { useState, useEffect } from 'react';
import { filters } from '../constants';

const useFetchPrevData = (filter) => {
  const [data, setData] = useState([]);
  const api = filter === filters.byDay ? '/datasets/ds3.json' : '/datasets/ds2.json';

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setData(data.map((_, index) => data[data.length - 1 - index]));
      });
  }, [filter]);

  return data;
};

export default useFetchPrevData;
