import { useState, useEffect } from 'react';

const useFetchPrevData = (filter) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (filter === 'By day')
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
