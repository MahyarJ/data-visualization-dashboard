import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PeriodPicker from './PeriodPicker';
import { filters } from '../constants';
import { queryByTestId } from '@testing-library/dom';

describe('PeriodPicker', () => {
  const filtersArr = [filters.BY_DAY, filters.BY_WEEK];

  it('renders title correctly', () => {
    const { getByText } = render(<PeriodPicker title="some test title" />);
    const titleElement = getByText(/some test title/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders selected value viewer component on mount', () => {
    const { getByTestId } = render(
      <PeriodPicker selectedIndex={0} filters={filtersArr} />,
    );
    const selectedViewerElement = getByTestId('selectedViewer');
    expect(selectedViewerElement).toBeInTheDocument();
  });

  it('renders default-selected string as the value on mount', () => {
    const { getByText } = render(<PeriodPicker selectedIndex={0} filters={filtersArr} />);
    const selectedViewerElement = getByText(filtersArr[0]);
    expect(selectedViewerElement).toBeInTheDocument();
  });

  it('renders drop-down menu on click ', async () => {
    const { getByTestId } = render(
      <PeriodPicker selectedIndex={0} filters={filtersArr} />,
    );
    const selectedViewerElement = getByTestId('selectedViewer');

    fireEvent.click(selectedViewerElement);
    const dropdown = await getByTestId('dropdown');
    expect(dropdown).toBeInTheDocument();
  });

  it('closes the dropdown on dropdown click', async () => {
    const { getByTestId } = render(
      <PeriodPicker selectedIndex={0} filters={filtersArr} />,
    );
    const selectorContainer = getByTestId('selectorContainer');
    const selectedViewerElement = getByTestId('selectedViewer');

    fireEvent.click(selectedViewerElement);
    const dropdown = await getByTestId('dropdown');
    fireEvent.click(dropdown);
    expect(queryByTestId(selectorContainer, 'dropdown')).toBeNull();
  });

  it('renders option as fitlers prop length ', async () => {
    const { getByTestId } = render(
      <PeriodPicker selectedIndex={0} filters={filtersArr} />,
    );
    const container = getByTestId('selectorContainer');
    fireEvent.click(container);
    const dropdown = await getByTestId('dropdown');
    expect(dropdown.children.length).toEqual(2);
  });

  it('changes the text on option selection', async () => {});
});
