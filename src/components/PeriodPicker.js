import React, { useState } from 'react';
import styles from './PeriodPicker.module.sass';

const PeriodPicker = ({ title, filters = [''], selectedIndex = 0, onSelect }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (filter) => {
    setOpen(false);
    onSelect(filter);
  };

  return (
    <header className={styles.container}>
      <h6 style={{ textAlign: 'left' }}>{title}</h6>
      <div
        data-testid="selectorContainer"
        className={styles.selectorContainer}
        onClick={() => setOpen(!open)}
      >
        <h6 data-testid="selectedViewer">{filters[selectedIndex]}</h6>
        {open && (
          <ul data-testid="dropdown" className={styles.dropdown}>
            {filters.map((filter, index) => {
              return (
                <li
                  className={index === selectedIndex ? styles.selected : null}
                  key={index}
                  data-testid={`option-${index}`}
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
