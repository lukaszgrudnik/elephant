import { render, screen } from '@testing-library/react';
import App from '../../apps/shell/src/app/app';

test('Renders the main page', () => {
  const testMessage = 'App Component';
  render(<App />);
  expect(screen.getByText(testMessage)).toBeInTheDocument();
});
