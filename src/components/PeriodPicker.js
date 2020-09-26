import React, { useState } from 'react';
import styles from './PeriodPicker.module.sass';

const PeriodPicker = ({ title, filters, selected, onSelect }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (filter) => {
    setOpen(false);
    onSelect(filter);
  };

  return (
    <header className={styles.container}>
      <h6 style={{ textAlign: 'left' }}>{title}</h6>
      <div className={styles.selectorContainer} onClick={() => setOpen(!open)}>
        <h6>{selected}</h6>
        {open && (
          <ul className={styles.dropdown}>
            {Object.keys(filters).map((key, index) => {
              const filter = filters[key];
              return (
                <li
                  className={filter === selected ? styles.selected : null}
                  key={index}
                  onClick={() => handleSelect(filter)}
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
