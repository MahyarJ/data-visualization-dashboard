import React, { useState } from 'react';
import styles from './App.module.sass';
import PeriodPicker from './components/PeriodPicker';
import ChartViewer from './components/ChartViewer';
import GrowthViewer from './components/GrowthViewer';
import PercentageViewer from './components/PercentageViewer';
import useFetchData from './hooks/useFetchData';
import useFetchPrevData from './hooks/useFetchPrevData';

const filters = ['By day', 'By week'];

const App = () => {
  const [filter, setFilter] = useState('By day');
  const data = useFetchData(filter);
  const [prev, recent] = useFetchPrevData(filter);

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
        recentValue={recent && recent.new_customers}
        prevPeriodStart={prev && prev.time_received * 1000}
        prevPeriodEnd={recent && recent.time_received * 1000}
        prevValue={prev && prev.new_customers}
        basketSize={(recent && recent.new_customers_basket_size) || 0}
        prevBasketSize={(prev && prev.new_customers_basket_size) || 0}
      />
      <GrowthViewer
        title="Returning customers"
        recentPeriodStart={data[0] && data[0].time_received * 1000}
        recentPeriodEnd={data[0] && data[data.length - 1].time_received * 1000}
        recentValue={recent && recent.returning_customers}
        prevPeriodStart={prev && prev.time_received * 1000}
        prevPeriodEnd={prev && recent.time_received * 1000}
        prevValue={prev && prev.returning_customers}
        basketSize={(recent && recent.returning_customers_basket_size) || 0}
        prevBasketSize={(prev && prev.returning_customers_basket_size) || 0}
      />
      <PercentageViewer
        title="Re-order percentage"
        baseTitle="Re-order"
        baseValue={prev && recent.reorders}
        percentageTitle="Re-order percentage"
        percentageValue={
          (recent && Math.round((recent.reorders / (recent.orders || 1)) * 100) * 100) /
          100
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
