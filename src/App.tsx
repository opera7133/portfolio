import { createEffect, Suspense } from 'solid-js';
import { useRoutes, Router } from 'solid-app-router';
import { routes } from './routes';
import Header from './components/Header';
import { AppContextProvider } from './AppContext';
import { preventSmoothScrollOnTabbing } from './utils';
import { MetaProvider, Title, Link, Meta } from 'solid-meta';

export const App = () => {
  const Routes = useRoutes(routes);

  preventSmoothScrollOnTabbing();

  return (
    <main class="min-h-screen">
      <div class="splashbg"></div>
      <Router>
        <MetaProvider>
          <AppContextProvider>
            <Header />
            <div id="main-content">
              <div>
                <Suspense>
                  <Routes />
                </Suspense>
              </div>
            </div>
          </AppContextProvider>
        </MetaProvider>
      </Router>
    </main>
  );
};
