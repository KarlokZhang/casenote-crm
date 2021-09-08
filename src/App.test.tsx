import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render app', () => {
  render(<App />);
  const linkElement = screen.getByText('react app');
  expect(linkElement).toBeInTheDocument();
});
