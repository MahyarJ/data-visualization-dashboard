import { useState, useEffect } from 'react';
import prepareForChart from '../helpers/prepareForChart';

const useFetchData = (filter) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (filter === 'By day')
      fetch('/datasets/ds1.json')
        .then((response) => response.json())
        .then((data) => {
          setData(prepareForChart(data), 'By day');
        });
    else
      fetch('/datasets/ds4.json')
        .then((response) => response.json())
        .then((data) => {
          setData(prepareForChart(data), 'By week');
        });
  }, [filter]);

  return data;
};

export default useFetchData;
