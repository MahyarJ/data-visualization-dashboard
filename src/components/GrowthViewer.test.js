import React from 'react';
import { render } from '@testing-library/react';
import GrowthViewer from './GrowthViewer';

describe('GrowthViewer', () => {
  it('renders title correctly', () => {
    const { getByText } = render(<GrowthViewer title="Foo" />);
    const titleElement = getByText('Foo');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders growth truely', () => {
    const recentValue = 100;
    const prevValue = 10;
    const { getByText } = render(
      <GrowthViewer title="Foo" recentValue={recentValue} prevValue={prevValue} />,
    );
    const growth = ((recentValue - prevValue) * 100) / prevValue;
    var regex = new RegExp(Math.round(Math.abs(growth)).toFixed(2) + '%', 'i');
    expect(getByText(regex)).toBeInTheDocument();
  });
});
