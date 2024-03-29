import { lazy } from 'solid-js';
import { RouteDefinition } from '@solidjs/router';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: lazy(() => import('./pages/Home'))
  },
  {
    path: '/works',
    component: lazy(() => import('./pages/Works'))
  },
  {
    path: '/services',
    component: lazy(() => import('./pages/Services'))
  },
  {
    path: '/about',
    component: lazy(() => import('./pages/About'))
  },
  {
    path: '/contact',
    component: lazy(() => import('./pages/Contact'))
  },
  {
    path: '/*all',
    component: lazy(() => import('./pages/404')),
  },
];