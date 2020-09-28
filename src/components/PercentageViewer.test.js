import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PercentageViewer from './PercentageViewer';

test('renders title correctly', () => {
  const { getByText } = render(<PercentageViewer title="Wolt rating" />);
  const titleElement = getByText('Wolt rating');
  expect(titleElement).toBeInTheDocument();
});

test('do not renders % when showPercent is false', () => {});
test('renders % when showPercent is true', () => {});
