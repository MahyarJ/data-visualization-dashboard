import React from 'react';
import { render } from '@testing-library/react';
import PercentageViewer from './PercentageViewer';

describe('PercentageViewer', () => {
  it('renders title correctly', () => {
    const { getByText } = render(<PercentageViewer title="Wolt rating" />);
    const titleElement = getByText('Wolt rating');
    expect(titleElement).toBeInTheDocument();
  });

  it('do not renders % when showPercent is false', () => {
    const { queryByText } = render(<PercentageViewer title="Wolt rating" />);
    expect(queryByText(/%/i)).toBeNull();
  });

  it('renders % when showPercent is true', () => {
    const { queryByText } = render(
      <PercentageViewer title="Wolt rating" showPercent={true} />,
    );
    expect(queryByText(/%/i)).toBeTruthy();
  });
});
