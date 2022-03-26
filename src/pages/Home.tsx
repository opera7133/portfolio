import { Component } from 'solid-js';
import { MetaProvider, Title } from 'solid-meta';
const Home: Component<{}> = () => {
  return (
    <>
      <MetaProvider>
        <Title>wamo</Title>
      </MetaProvider>
      <div class="flex flex-col justify-center h-screen">
        <div class="container mx-auto max-w-5xl z-20">
          <div class="mx-4 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
            <img src="/img/wamo.jpg" alt="usericon" class="rounded-full w-36 shadow-md" />
            <div>
              <h2 class="text-5xl pb-2 font-semibold font-futura">wamo</h2>
              <p class="text-3xl pb-4 font-futura">I make websites and videos as a hobby.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
