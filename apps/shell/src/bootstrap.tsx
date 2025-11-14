import { createRoot } from 'react-dom/client';
import App from './app/app';
import './styles.scss';

const rootElement = document.getElementById('root') as HTMLElement;
rootElement.className = 'root';
const root = createRoot(rootElement);

root.render(<App />);
