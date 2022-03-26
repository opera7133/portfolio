import { NavLink, useRouteData } from "solid-app-router";
import { Component } from "solid-js";
import { MetaProvider, Title } from "solid-meta";
import { useRouteReadyState } from "../utils/useReadyState";
import { FiGlobe, FiGithub, FiChevronLeft } from 'solid-icons/fi'

export const WorksPage: Component = () => {
    const data = useRouteData<{
        slug: string;
        details: WorksInfo;
        archive: boolean;
      }>();
      useRouteReadyState();
  return (
    <div>
      <MetaProvider>
        <Title>{data.details.title} | wamo</Title>
      </MetaProvider>
              <div class="px-4 pb-20 mt-20 mx-auto max-w-5xl container">
                <NavLink href="/works" class="rounded-md shadow-md duration-200 hover:shadow-sm pl-1 pr-3 pt-1 pb-2 inline-flex flex-row items-center text-lg bg-gray-100"><FiChevronLeft size={30} color="#000" class="pt-1" />Worksに戻る</NavLink>
                <div class="text-center space-y-5 mt-10">
                  <img class="rounded-md mb-10 shadow-md" src={data.details.img} />
                </div>
                <h2 class="text-4xl mb-2 font-semibold font-futura">
                    {data.details.title}
                </h2>
                <div class="flex flex-row gap-3">
                <a class="p-2 shadow-md bg-gray-200 rounded-full duration-200 hover:shadow-sm" href={data.details.url} target="_blank" rel="noopener noreferrer"><FiGlobe size={30} color="#000000"/></a>
                {data.details.repo ? <a class="p-2 pt-2.5 shadow-md bg-gray-200 rounded-full duration-200 hover:shadow-sm" href={data.details.repo} target="_blank" rel="noopener noreferrer"><FiGithub size={28} color="#000000"/></a> : ""}
                </div>
                <p class="mt-5 text-lg">
                  {data.details.description}
                </p>
              </div>
              </div>
  );
}

export default WorksPage;