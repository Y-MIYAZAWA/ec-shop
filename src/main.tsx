
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux'
import { store } from './store';
import AppAdmin from './AppAdmin';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RecoilRoot>
        <AppAdmin />
      </RecoilRoot>
    </Provider>
  </React.StrictMode>
)
