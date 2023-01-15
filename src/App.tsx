import { FunctionComponent } from 'react';
import { createRoot } from 'react-dom/client';

import Questions from '~/components/Questions';
import './style/index.scss';

const App: FunctionComponent = () => {
  return (
    <>
      <h1>
        <a href="https://github.com/1ilsang/resilience-page">Github</a>
      </h1>
      <Questions />
    </>
  );
};

const root = createRoot(document.getElementById('app') as Element);
root.render(<App />);
