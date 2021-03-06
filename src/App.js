import React, { useState } from 'react';
import styles from './App.module.sass';
import PeriodPicker from './components/PeriodPicker';
import ChartViewer from './components/ChartViewer';
import GrowthViewer from './components/GrowthViewer';
import PercentageViewer from './components/PercentageViewer';
import useFetchChartData from './hooks/useFetchChartData';
import useFetchPeriodData from './hooks/useFetchPeriodData';
import { filters, currency, dataSets } from './constants';

const filtersArr = [filters.BY_DAY, filters.BY_WEEK];

const App = () => {
  const [filter, setFilter] = useState(0);
  const { data, loading } = useFetchChartData(filtersArr[filter]);
  const {
    data: [prev, recent],
    loading: periodLoading,
  } = useFetchPeriodData(filtersArr[filter]);

  return (
    <div className={styles.container}>
      <PeriodPicker
        title="Customer Base"
        filters={filtersArr}
        selectedIndex={filter}
        onSelect={setFilter}
      />
      <ChartViewer
        loading={loading}
        title="New vs. returning customers"
        data={data}
        dataSets={dataSets}
      />
      <GrowthViewer
        loading={periodLoading}
        title="New customers"
        recentPeriodStart={data[0] && data[0].time_received * 1000}
        recentPeriodEnd={
          data[0] &&
          (filter
            ? // If we select week period, so
              // calculates the end of the week from the begin date
              (data[data.length - 1].time_received + 6 * 24 * 3600) * 1000
            : // else we selected day, so
              // calculates that day
              data[data.length - 1].time_received * 1000)
        }
        recentValue={recent && recent.new_customers}
        prevPeriodStart={prev && prev.time_received * 1000}
        prevPeriodEnd={recent && recent.time_received * 1000}
        prevValue={prev && prev.new_customers}
        basketSize={recent && recent.new_customers_basket_size}
        prevBasketSize={prev && prev.new_customers_basket_size}
        currency={prev && currency[prev.currency]}
      />
      <GrowthViewer
        loading={periodLoading}
        title="Returning customers"
        recentPeriodStart={data[0] && data[0].time_received * 1000}
        recentPeriodEnd={
          data[0] &&
          (filter
            ? // If we select week period, so
              // calculates the end of the week from the begin date
              (data[data.length - 1].time_received + 6 * 24 * 3600) * 1000
            : // else we selected day, so
              // calculates that day
              data[data.length - 1].time_received * 1000)
        }
        recentValue={recent && recent.returning_customers}
        prevPeriodStart={prev && prev.time_received * 1000}
        prevPeriodEnd={prev && recent.time_received * 1000}
        prevValue={prev && prev.returning_customers}
        basketSize={recent && recent.returning_customers_basket_size}
        prevBasketSize={prev && prev.returning_customers_basket_size}
        currency={prev && currency[prev.currency]}
      />
      <PercentageViewer
        loading={periodLoading}
        title="Re-order percentage"
        baseTitle="Re-order"
        baseValue={prev && recent.reorders}
        percentageTitle="Re-order percentage"
        percentageValue={
          recent && Math.round((recent.reorders / (recent.orders || 1)) * 100)
        }
        max={100}
        showSign={true}
        showPercent={true}
        description="The re-order percentage shows you the percentage of your current orders by
        customers that have ordered before."
      />
      <PercentageViewer
        loading={periodLoading}
        title="Wolt rating"
        baseTitle="Reviews"
        baseValue={recent && recent.rating_count}
        percentageTitle="Rating"
        percentageValue={recent && Math.round(recent.rating_score * 100) / 100}
        max={5}
        description="Wolt rating shows you how satisfied your customers are with their order experience."
      />
    </div>
  );
};

export default App;
