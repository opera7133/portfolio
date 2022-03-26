import { Component } from 'solid-js';
import { Title } from 'solid-meta';

const NotFound: Component<{}> = () => {
  return (
    <>
    <Title>404 | wamo</Title>
      <div class="flex flex-col justify-center h-screen">
        <div class="container mx-auto max-w-5xl z-20">
          <div class="mx-4 text-center">
            <h2 class="text-7xl mb-4 font-semibold font-futura">404 Not Found</h2>
            <p class="text-3xl font-semibold">Your requested file does not exist.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
