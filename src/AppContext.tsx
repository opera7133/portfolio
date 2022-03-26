import { Component, createContext, createEffect, createResource, useContext } from 'solid-js';
import { useLocation } from 'solid-app-router';
import { createCookieStorage } from '@solid-primitives/storage';

interface AppContextInterface {
  isDark: boolean;
}

const AppContext = createContext<AppContextInterface>({
  isDark: false,
});

type DataParams = {
  page: string;
};

export const AppContextProvider: Component<{}> = (props) => {
  const now = new Date();
  const cookieOptions = {
    expires: new Date(now.getFullYear() + 1, now.getMonth(), now.getDate()),
  };
  const [settings, set] = createCookieStorage();
  const browserLang = navigator.language.slice(0, 2);
  const location = useLocation();
  const params = (): DataParams => {
    let page = location.pathname.slice(1);
    if (page == '') {
      page = 'home';
    }
    return { page };
  };

  const isDark = () =>
    settings.dark === 'true'
      ? true
      : settings.dark === 'false'
      ? false
      : window.matchMedia('(prefers-color-scheme: dark)').matches;

  createEffect(() => {
    if (isDark()) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  });

  const store = {
    set isDark(value) {
      set('dark', value === true ? 'true' : 'false', cookieOptions);
    },
    get isDark() {
      return isDark();
    },
  };

  return (
    <AppContext.Provider value={store}>
      <div>{props.children}</div>
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
