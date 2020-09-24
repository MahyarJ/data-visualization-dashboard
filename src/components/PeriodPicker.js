import React, { useState } from 'react';
import styles from './PeriodPicker.module.sass';
import classNames from 'classnames/bind';

const PeriodPicker = ({ title, filters, selected, onSelect }) => {
  const [open, setOpen] = useState(false);
  const cx = classNames.bind(styles);

  const handleSelect = (index) => {
    setOpen(false);
    onSelect(index);
  };

  return (
    <header className={styles.container}>
      <h6 style={{ textAlign: 'left' }}>{title}</h6>
      <div className={styles.selectorContainer} onClick={() => setOpen(!open)}>
        <h6>{filters[selected]}</h6>
        <h6 style={{ fontFamily: 'fontello' }}></h6>
        {open && (
          <ul className={styles.dropdown}>
            {filters.map((filter, index) => {
              return (
                <li
                  className={index === selected ? styles.selected : null}
                  key={index}
                  onClick={() => handleSelect(index)}
                >
                  {filter}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </header>
  );
};

export default PeriodPicker;