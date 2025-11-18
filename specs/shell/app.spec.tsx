import { render, screen } from '@testing-library/react';
import App from '../../apps/shell/src/app/app';
import { MemoryRouter, Outlet, Route, Routes } from 'react-router';

test('app should render', () => {
  const app = render(<App />);
  expect(app).toBeTruthy();
});

test('app should has outlet', () => {
  render(
    <MemoryRouter initialEntries={['/child']}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="child" element={<div>ChildContent</div>} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );

  expect(screen.getByText('ChildContent')).toBeInTheDocument();
});
