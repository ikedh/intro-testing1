import App from '../App'
import { render,screen } from '@testing-library/react';

test('renderizado del link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
