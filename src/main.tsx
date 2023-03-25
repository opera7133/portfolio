import './assets/main.css';

import { render } from 'solid-js/web';
import { MetaProvider } from '@solidjs/meta';

import { App } from './App';

const app = document.getElementById('app');

if (app) {
  render(() => <App />, app);
}
