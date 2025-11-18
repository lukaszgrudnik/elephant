import { render, screen } from '@testing-library/react';
import App from '../../apps/shell/src/app/app';

test('renders hello', () => {
  render(<App />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
