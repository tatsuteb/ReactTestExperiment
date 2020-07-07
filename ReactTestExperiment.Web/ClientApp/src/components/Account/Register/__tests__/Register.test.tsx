import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Register from '../index';

test('loads and displays greeting', async () => {
  render(<Register />);

  expect(screen.getByText('登録する')).toBeDisabled();
})