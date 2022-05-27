import { createEffect, Suspense } from 'solid-js';
import { useRoutes, Router, useIsRouting } from 'solid-app-router';
import { routes } from './routes';
import Header from './components/Header';
import { AppContextProvider } from './AppContext';
import { preventSmoothScrollOnTabbing } from './utils';
import { MetaProvider, Title, Link, Meta } from 'solid-meta';
import { Transition } from 'solid-transition-group';

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
