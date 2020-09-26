import React, { useState, useEffect } from 'react';
import styles from './App.module.sass';
import PeriodPicker from './components/PeriodPicker';
import ChartViewer from './components/ChartViewer';
import GrowthViewer from './components/GrowthViewer';
import PercentageViewer from './components/PercentageViewer';
import prepareForChart from './helpers/prepareForChart';

const filters = ['By day', 'By week'];

const App = () => {
  const [data, setData] = useState([]);
  const [prevData, setPrevData] = useState([]);
  const [filter, setFilter] = useState('By day');

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

  useEffect(() => {
    if (filter === 'By day')
      fetch('/datasets/ds3.json')
        .then((response) => response.json())
        .then((data) => {
          setPrevData(data.map((_, index) => data[data.length - 1 - index]));
        });
    else
      fetch('/datasets/ds2.json')
        .then((response) => response.json())
        .then((data) => {
          setPrevData(data.map((_, index) => data[data.length - 1 - index]));
        });
  }, [filter]);

  const {
    // totalNewCustomers,
    // totalReturningCustomers,
    totalOrders,
    totalReorders,
    totalRatings,
    totalRatingsScore,
    // totalNewCustomersBasketSize,
    // totalReturningCustomersBasketSize,
  } = data.reduce(
    (
      total,
      {
        // new_customers,
        // returning_customers,
        orders,
        reorders,
        rating_count,
        rating_score,
        // new_customers_basket_size,
        // returning_customers_basket_size,
      },
    ) => {
      return {
        // totalNewCustomers: total.totalNewCustomers + new_customers,
        // totalReturningCustomers: total.totalReturningCustomers + returning_customers,
        totalOrders: total.totalOrders + orders,
        totalReorders: total.totalReorders + reorders,
        totalRatings: total.totalRatings + rating_count,
        totalRatingsScore: total.totalRatingsScore + rating_count * (rating_score || 0),
        // totalNewCustomersBasketSize:
        //   total.totalNewCustomersBasketSize + (new_customers_basket_size || 0),
        // totalReturningCustomersBasketSize:
        //   total.totalReturningCustomersBasketSize +
        //   (returning_customers_basket_size || 0),
      };
    },
    {
      // totalNewCustomers: 0,
      // totalReturningCustomers: 0,
      totalOrders: 0,
      totalReorders: 0,
      totalRatings: 0,
      totalRatingsScore: 0,
      // totalNewCustomersBasketSize: 0,
      // totalReturningCustomersBasketSize: 0,
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
      <ChartViewer data={data} />
      <GrowthViewer
        title="New customers"
        recentPeriodStart={data[0] && data[0].time_received * 1000}
        recentPeriodEnd={data[0] && data[data.length - 1].time_received * 1000}
        recentValue={prevData[0] && prevData[prevData.length - 1].new_customers}
        // recentValue={totalNewCustomers}
        prevPeriodStart={prevData[0] && prevData[0].time_received * 1000}
        prevPeriodEnd={prevData[0] && prevData[prevData.length - 1].time_received * 1000}
        prevValue={prevData[0] && prevData[0].new_customers}
        // basketSize={totalNewCustomersBasketSize}
        basketSize={
          (prevData[0] && prevData[prevData.length - 1].new_customers_basket_size) || 0
        }
        prevBasketSize={(prevData[0] && prevData[0].new_customers_basket_size) || 0}
      />
      <GrowthViewer
        title="Returning customers"
        recentPeriodStart={data[0] && data[0].time_received * 1000}
        recentPeriodEnd={data[0] && data[data.length - 1].time_received * 1000}
        recentValue={prevData[0] && prevData[prevData.length - 1].returning_customers}
        // recentValue={totalReturningCustomers}
        prevPeriodStart={prevData[0] && prevData[0].time_received * 1000}
        prevPeriodEnd={prevData[0] && prevData[prevData.length - 1].time_received * 1000}
        prevValue={prevData[0] && prevData[0].returning_customers}
        // basketSize={totalReturningCustomersBasketSize}
        basketSize={
          (prevData[0] &&
            prevData[prevData.length - 1].returning_customers_basket_size) ||
          0
        }
        prevBasketSize={(prevData[0] && prevData[0].returning_customers_basket_size) || 0}
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
        showSign={true}
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
