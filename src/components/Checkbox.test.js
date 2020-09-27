import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

test('renders label correctly', () => {
  const { getByText } = render(<Checkbox label="new customers" />);
  const label = getByText('new customers');
  expect(label).toBeInTheDocument();
});

test('renders font color truely white', () => {
  const { getByText } = render(
    <Checkbox isChecked={true} color="#AAAAAA" label="new customers" />,
  );
  expect(getByText('new customers')).toHaveStyle(`color: #FFFFFF`);
});

test('renders with background color when is checked', () => {
  const { getByText } = render(
    <Checkbox isChecked={true} color="#AAAAAA" label="new customers" />,
  );
  expect(getByText('new customers')).toHaveStyle(`background: #AAAAAA`);
});

test('renders without background color when is not checked', () => {
  const { getByText } = render(
    <Checkbox isChecked={false} color="#AAAAAA" label="new customers" />,
  );
  expect(getByText('new customers')).not.toHaveStyle(`background: #AAAAAA`);
});

test('change isChecked value when clicks', async () => {});
