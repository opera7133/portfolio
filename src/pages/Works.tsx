import { Component } from 'solid-js';
import { MetaProvider, Title } from 'solid-meta';
import { setOpen } from '../signals';
import { list } from './Works.data';
import WorksDialog from '../components/WorksDialog';

const Works: Component<{}> = () => {
  const data = Object.entries(list);
  return (
    <>
      <MetaProvider>
        <Title>Works | wamo</Title>
      </MetaProvider>
      <div class="mt-28">
        <div class="container mx-auto max-w-7xl pb-20 z-20">
          <div class="mx-4">
            <h2 class="text-3xl mb-4 font-semibold font-futura">Works</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {data.map((work) => {
                return (
                  <button onClick={() => setOpen(work[0])} class="duration-300 hover:drop-shadow drop-shadow-lg">
                    <picture>
                      <source srcset={work[1].img.replace('jpg', 'webp')} type="image/webp" />
                      <img src={work[1].img} class="rounded-md" />
                    </picture>
                  </button>
                );
              })}
            </div>
            {data.map((work) => {
              return <WorksDialog id={work[0]} data={work[1]} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
