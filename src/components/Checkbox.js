import React from 'react';
import styles from './Checkbox.module.sass';

const Checkbox = ({ label, color = '#000000', isChecked, onSelect, dataTestid }) => {
  return (
    // We know because of A11Y we better use the checkbox
    // and handle work arounds for it, but
    // I just wanted to prevent complexity I used a simple div
    <div
      className={styles.container}
      onClick={onSelect}
      data-testid={dataTestid}
      style={{
        background: isChecked ? color : 'transparent',
        color: isChecked ? '#FFFFFF' : color,
        borderColor: color,
      }}
    >
      {label}
    </div>
  );
};

export default Checkbox;
