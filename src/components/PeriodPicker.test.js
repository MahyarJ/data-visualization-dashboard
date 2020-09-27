import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PeriodPicker from './PeriodPicker';
import { filters } from '../constants';
import { queryByTestId, waitFor } from '@testing-library/dom';

test('renders title correctly', () => {
  const { getByText } = render(<PeriodPicker title="some test title" />);
  const titleElement = getByText(/some test title/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders selected value viewer component on mount', () => {
  const { getByTestId } = render(<PeriodPicker selected="default selected" />);
  const selectedViewerElement = getByTestId('selectedViewer');
  expect(selectedViewerElement).toBeInTheDocument();
});

test('renders default-selected string as the value on mount', () => {
  const { getByText } = render(<PeriodPicker selected="default selected" />);
  const selectedViewerElement = getByText('default selected');
  expect(selectedViewerElement).toBeInTheDocument();
});

test('renders drop-down menu on click ', async () => {
  const { getByTestId } = render(
    <PeriodPicker selected="default selected" filters={filters} />,
  );
  const selectedViewerElement = getByTestId('selectedViewer');

  fireEvent.click(selectedViewerElement);
  const dropdown = await getByTestId('dropdown');
  expect(dropdown).toBeInTheDocument();
});

test('closes the dropdown on dropdown click', async () => {
  const { getByTestId } = render(
    <PeriodPicker selected="default selected" filters={filters} />,
  );
  const selectorContainer = getByTestId('selectorContainer');
  const selectedViewerElement = getByTestId('selectedViewer');

  fireEvent.click(selectedViewerElement);
  const dropdown = await getByTestId('dropdown');
  fireEvent.click(dropdown);
  expect(queryByTestId(selectorContainer, 'dropdown')).toBeNull();
});

test('renders option as many as fitlers prop length ', async () => {});
test('changes the text on option selection', async () => {});
