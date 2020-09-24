import React from 'react';
import styles from './App.module.sass';
import ChartViewer from './components/ChartViewer';
import GrowthViewer from './components/GrowthViewer';
import PercentageViewer from './components/PercentageViewer';
import data from './datasets/dataset1.json';

function App() {
  return (
    <div className={styles.container}>
      <header>
        <h6 style={{ textAlign: 'left' }}>Customer Base</h6>
      </header>
      <ChartViewer data={data} />
      <GrowthViewer title="New customers" growth={15.0} />
      <GrowthViewer title="Returning customers" growth={-24.0} />
      <PercentageViewer
        title="Re-order percentage"
        baseTitle="Re-order"
        baseValue={144}
        percentageTitle="Re-order percentage"
        percentageValue="+75.00%"
        description="The re-order percentage shows you the percentage of your current orders by
        customers that have ordered before."
      />
      <PercentageViewer
        title="Wolt rating"
        baseTitle="Reviews"
        baseValue={31}
        percentageTitle="Rating"
        percentageValue="4.77"
        description="Wolt rating shows you how satisfied your customers are with their order experience."
      />
    </div>
  );
}

export default App;
