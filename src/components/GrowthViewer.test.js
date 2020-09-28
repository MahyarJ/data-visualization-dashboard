import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GrowthViewer from './GrowthViewer';

test('renders title correctly', () => {
  const { getByText } = render(<GrowthViewer title="Foo" />);
  const titleElement = getByText('Foo');
  expect(titleElement).toBeInTheDocument();
});

test('renders growth truely', () => {});
test('renders basket-size difference truely', () => {});
