import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const timeElement = screen.getByTestId(/time-widget/i)
  expect(timeElement).toBeInTheDocument();
});
