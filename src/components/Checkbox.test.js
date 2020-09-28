import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('renders label correctly', () => {
    const { getByText } = render(<Checkbox label="new customers" />);
    const label = getByText('new customers');
    expect(label).toBeInTheDocument();
  });

  it('renders font color truely white', () => {
    const { getByText } = render(
      <Checkbox isChecked={true} color="#AAAAAA" label="new customers" />,
    );
    expect(getByText('new customers')).toHaveStyle(`color: #FFFFFF`);
  });

  it('renders with background color when is checked', () => {
    const { getByText } = render(
      <Checkbox isChecked={true} color="#AAAAAA" label="new customers" />,
    );
    expect(getByText('new customers')).toHaveStyle(`background: #AAAAAA`);
  });

  it('renders without background color when is not checked', () => {
    const { getByText } = render(
      <Checkbox isChecked={false} color="#AAAAAA" label="new customers" />,
    );
    expect(getByText('new customers')).not.toHaveStyle(`background: #AAAAAA`);
  });

  it('change isChecked value when clicks', async () => {
    const handleSelect = jest.fn();
    const { getByText } = render(
      <Checkbox isChecked={false} color="#AAAAAA" label="Foo" onSelect={handleSelect} />,
    );
    fireEvent.click(getByText('Foo'));
    expect(handleSelect).toBeCalledTimes(1);
  });
});
