import React, { useState, useEffect } from 'react';
import styles from './App.module.sass';
import PeriodPicker from './components/PeriodPicker';
import ChartViewer from './components/ChartViewer';
import GrowthViewer from './components/GrowthViewer';
import PercentageViewer from './components/PercentageViewer';

const filters = ['By day', 'By week'];

const App = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    fetch(filter === 0 ? '/datasets/ds1.json' : '/datasets/ds4.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data.map((_, index) => data[data.length - 1 - index]));
        console.log(data);
      });
  }, [filter]);

  const {
    totalNewCustomers,
    totalReturningCustomers,
    totalOrders,
    totalReorders,
    totalRatings,
    totalRatingsScore,
  } = data.reduce(
    (
      total,
      {
        new_customers,
        returning_customers,
        orders,
        reorders,
        rating_count,
        rating_score,
      },
    ) => {
      return {
        totalNewCustomers: total.totalNewCustomers + new_customers,
        totalReturningCustomers: total.totalReturningCustomers + returning_customers,
        totalOrders: total.totalOrders + orders,
        totalReorders: total.totalReorders + reorders,
        totalRatings: total.totalRatings + rating_count,
        totalRatingsScore: total.totalRatingsScore + rating_count * (rating_score || 0),
      };
    },
    {
      totalNewCustomers: 0,
      totalReturningCustomers: 0,
      totalOrders: 0,
      totalReorders: 0,
      totalRatings: 0,
      totalRatingsScore: 0,
    },
  );

  return (
    <div className={styles.container}>
      <PeriodPicker
        title="Customer Base"
        filters={filters}
        selected={filter}
        onSelect={setFilter}
      />
      <ChartViewer
        data={data.map((set) => {
          return { ...set, day_recieved: new Date(set.time_received * 1000).getDate() };
        })}
      />
      <GrowthViewer
        title="New customers"
        recentValue={totalNewCustomers}
        prevValue={null}
        growth={15.0}
      />
      <GrowthViewer
        title="Returning customers"
        recentValue={totalReturningCustomers}
        prevValue={null}
        growth={-24.0}
      />
      <PercentageViewer
        title="Re-order percentage"
        baseTitle="Re-order"
        baseValue={totalReorders}
        percentageTitle="Re-order percentage"
        percentageValue={
          (Math.round((totalReorders / (totalOrders || 1)) * 100) * 100) / 100
        }
        max={100}
        showPercent={true}
        description="The re-order percentage shows you the percentage of your current orders by
        customers that have ordered before."
      />
      <PercentageViewer
        title="Wolt rating"
        baseTitle="Reviews"
        baseValue={totalRatings}
        percentageTitle="Rating"
        percentageValue={
          Math.round((totalRatingsScore / (totalRatings || 1)) * 100) / 100
        }
        max={5}
        description="Wolt rating shows you how satisfied your customers are with their order experience."
      />
    </div>
  );
};

export default App;
