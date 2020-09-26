import moment from 'moment';
import { filters } from '../constants';

const formatDataForChart = (data, filter) => {
  return data.map((_, index) => {
    const item = data[data.length - 1 - index];
    const time = moment(item.time_received * 1000);
    return {
      ...item,
      label: filter === filters.byDay ? time.format('D') : time.week(),
    };
  });
};

export default formatDataForChart;
