import { useState, useEffect } from 'react';
import formatDataForChart from '../helpers/formatDataForChart';
import { filters } from '../constants';

const useFetchData = (filter) => {
  const [data, setData] = useState([]);
  const api = filter === filters.byDay ? '/datasets/ds1.json' : '/datasets/ds4.json';

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setData(formatDataForChart(data, filter));
      });
  }, [filter]);

  return data;
};

export default useFetchData;
