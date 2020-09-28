import { useState, useEffect } from 'react';
import formatDataForChart from '../helpers/formatDataForChart';
import { filters } from '../constants';

const useFetchChartData = (filter) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const api = filter === filters.BY_DAY ? '/datasets/ds1.json' : '/datasets/ds4.json';
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(formatDataForChart(data, filter));
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [filter]);

  return { data, loading, error };
};

export default useFetchChartData;
