import moment from 'moment';

const prepareForChart = (data, filter) => {
  return data.map((_, index) => {
    const item = data[data.length - 1 - index];
    const time = moment(item.time_received * 1000);
    return {
      ...item,
      label: filter === 'By day' ? time.format('D') : time.week(),
    };
  });
};

export default prepareForChart;
