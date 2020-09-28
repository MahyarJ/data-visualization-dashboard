import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PercentageViewer from './PercentageViewer';

test('renders title correctly', () => {
  const { getByText } = render(<PercentageViewer title="Foo" />);
  const titleElement = getByText('Foo');
  expect(titleElement).toBeInTheDocument();
});
