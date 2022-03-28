import { NavLink } from 'solid-app-router';
import { Component } from 'solid-js';
import { MetaProvider, Title } from 'solid-meta';
import { list } from './Works.data';

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
            <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
              {data.map((work, key) => {
                return (
                <NavLink href={`/works/${work[0]}`}>
                  <picture>
                    <source srcset={work[1].img.replace("jpg", "webp")} type="image/webp">
                    <img src={work[1].img} class='rounded-md' />
                  </picture>
                </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
