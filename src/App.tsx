import { Suspense } from 'solid-js';
import { useRoutes, Router } from '@solidjs/router';
import { routes } from './routes';
import Header from './components/Header';
import { AppContextProvider } from './AppContext';
import { preventSmoothScrollOnTabbing } from './utils';
import { MetaProvider } from '@solidjs/meta';

export const App = () => {
  const Routes = useRoutes(routes);
  preventSmoothScrollOnTabbing();
  return (
    <main class="min-h-screen overflow-hidden">
      <div class="splashbg"></div>
      <Router>
        <MetaProvider>
          <Header />
          <AppContextProvider>
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
