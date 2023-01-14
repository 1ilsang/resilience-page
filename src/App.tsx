import { FunctionComponent } from 'react';
import { createRoot } from 'react-dom/client';

import Questions from '~/components/Questions';
import './style/index.scss';

const App: FunctionComponent = () => {
  return <Questions />;
};

const root = createRoot(document.getElementById('app') as Element);
root.render(<App />);
