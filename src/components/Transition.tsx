import { useIsRouting } from '@solidjs/router';

const transition = () => {
  const isRouting = useIsRouting();
  if (isRouting()) {
    document.body.classList.add('appear');
    window.setTimeout(function () {
      document.body.classList.remove('appear');
    }, 1200);
  }
};

export default transition;
