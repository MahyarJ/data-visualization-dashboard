import { useState, useEffect } from 'react';
import formatDataForChart from '../helpers/formatDataForChart';
import { filters } from '../constants';

const useFetchData = (filter) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (filter === filters.byDay)
      fetch('/datasets/ds1.json')
        .then((response) => response.json())
        .then((data) => {
          setData(formatDataForChart(data, filter));
        });
    else
      fetch('/datasets/ds4.json')
        .then((response) => response.json())
        .then((data) => {
          setData(formatDataForChart(data, filter));
        });
  }, [filter]);

  return data;
};

export default useFetchData;
