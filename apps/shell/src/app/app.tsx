import './app.scss';
import { Outlet } from 'react-router';
import Navigation from './navigation/navigation';

export default function App() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}
