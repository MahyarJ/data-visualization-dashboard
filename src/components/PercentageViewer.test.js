import React from 'react';
import { render } from '@testing-library/react';
import PercentageViewer from './PercentageViewer';

test('renders title correctly', () => {
  const { getByText } = render(<PercentageViewer title="Wolt rating" />);
  const titleElement = getByText('Wolt rating');
  expect(titleElement).toBeInTheDocument();
});

test('do not renders % when showPercent is false', () => {
  const { queryByText } = render(<PercentageViewer title="Wolt rating" />);
  expect(queryByText(/%/i)).toBeNull();
});

test('renders % when showPercent is true', () => {
  const { queryByText } = render(
    <PercentageViewer title="Wolt rating" showPercent={true} />,
  );
  expect(queryByText(/%/i)).toBeTruthy();
});
