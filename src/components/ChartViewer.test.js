import React from 'react';
import { render } from '@testing-library/react';
import ChartViewer from './ChartViewer';
import { dataSets } from '../constants';

describe('ChartViewer', () => {
  it('renders title correctly', () => {
    const { getByText } = render(<ChartViewer title="Foo" dataSets={dataSets} />);
    const titleElement = getByText('Foo');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders Checkbox as data-set length on mount', () => {
    const { getByTestId } = render(<ChartViewer title="Foo" dataSets={dataSets} />);
    expect(getByTestId('checkboxContainer').children.length).toEqual(2);
  });
});
