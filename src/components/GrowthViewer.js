import React from 'react';
import styles from './GrowthViewer.module.sass';
import Loading from './Loading';
import classNames from 'classnames/bind';
import moment from 'moment';
import { dateFormat } from '../constants';

const formatDate = (date) => {
  return moment(date).format(dateFormat);
};

const formatPrevDate = (date) => {
  // For preventing overlapping in visualization
  // we have to show the previous period ends
  // before recent period starts
  return moment(date).subtract('1', 'day').format(dateFormat);
};

const GrowthViewer = ({
  title,
  loading = false,
  basketSize = 1,
  prevBasketSize = 1,
  recentPeriodStart,
  recentPeriodEnd,
  recentValue = 1,
  prevPeriodStart,
  prevPeriodEnd,
  prevValue = 1,
  currency,
}) => {
  const cx = classNames.bind(styles);
  const growth = ((recentValue - prevValue) * 100) / prevValue;
  const basketSizeChange = ((basketSize - prevBasketSize) * 100) / prevBasketSize;
  const growthStyles = cx({
    withSmallLineDivider: true,
    green: growth > 0 && !loading,
    red: growth <= 0 && !loading,
  });

  const basketSizeClassName =
    basketSizeChange > 0
      ? styles.basketSizeChangeGreen
      : basketSizeChange < -5
      ? styles.basketSizeChangeRed
      : styles.basketSizeChangeOrange;

  return (
    <section className={styles.container}>
      <h6>{title}</h6>
      <div className={styles.periodContainer}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <p>{`${formatDate(recentPeriodStart)} - ${formatDate(recentPeriodEnd)}`}</p>
            <h1>{recentValue}</h1>
            <p>{`${formatDate(prevPeriodStart)} - ${formatPrevDate(prevPeriodEnd)}`}</p>
            <h3>{prevValue}</h3>
          </>
        )}
      </div>
      <div className={growthStyles}>
        <h6>Growth</h6>
        {loading ? (
          <Loading />
        ) : (
          <h1>
            {(growth > 0 && '+') || (growth < 0 && '-')}
            {Math.round(Math.abs(growth)).toFixed(2)}%
          </h1>
        )}
      </div>
      <div className={styles.withLongLineDivider}>
        <h6>Basket size</h6>
        {loading ? (
          <Loading />
        ) : (
          <h1>
            {basketSize.toFixed(2)}
            {currency}
          </h1>
        )}
      </div>
      {!loading && (
        <p className={basketSizeClassName}>
          {(basketSizeChange > 0 && '+') || (basketSizeChange < 0 && '-')}
          {Math.round(Math.abs(basketSizeChange) * 10) / 10}%
        </p>
      )}
    </section>
  );
};

export default GrowthViewer;
