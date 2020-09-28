import { useState, useEffect } from 'react';
import { filters } from '../constants';

const useFetchPeriodData = (filter) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const api = filter === filters.BY_DAY ? '/datasets/ds3.json' : '/datasets/ds2.json';
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data.map((_, index) => data[data.length - 1 - index]));
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [filter]);

  return { data, loading, error };
};

export default useFetchPeriodData;
