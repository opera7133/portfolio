import { Component } from "solid-js";
import { MetaProvider, Title } from "@solidjs/meta";
import { BiRegularServer } from "solid-icons/bi";
import { RiArrowsArrowRightSLine } from "solid-icons/ri";

const Services: Component<{}> = () => {
  return (
    <>
      <MetaProvider>
        <Title>Services | wamo</Title>
      </MetaProvider>
      <div class="mt-28">
        <div class="container mx-auto max-w-7xl pb-20 z-20">
          <div class="mx-4">
            <h2 class="text-3xl mb-4 font-semibold font-futura">Services</h2>
            <p class="mb-8">個人的に運営しているサービスの一覧です。</p>
            <div class="flex flex-col mb-8">
              <div class="bg-slate-800 text-white p-8 flex items-center gap-5 rounded-t-xl">
                <div class="p-3 bg-white rounded-full inline-block">
                  <BiRegularServer class="fill-slate-800" size={30} />
                </div>
                <div>
                  <h3 class="text-2xl">Sook.3rd</h3>
                </div>
              </div>
              <a
                href="https://mattar.wmsci.com"
                target="_blank"
                rel="noreferrer noopener"
                class="py-5 px-8 bg-gray-100 duration-200 hover:bg-gray-300 flex justify-between"
              >
                <h4 class="text-xl">Mattar</h4>
                <RiArrowsArrowRightSLine size={30} />
              </a>
              <a
                href="https://github.com/opera7133/ggrks"
                target="_blank"
                rel="noreferrer noopener"
                class="py-5 px-8 bg-gray-100 duration-200 hover:bg-gray-300 flex justify-between"
              >
                <h4 class="text-xl">ggrks bot</h4>
                <RiArrowsArrowRightSLine size={30} />
              </a>
            </div>
            <div class="flex flex-col mb-8">
              <div class="bg-slate-800 text-white p-8 flex items-center gap-5 rounded-t-xl">
                <div class="p-3 bg-white rounded-full inline-block">
                  <BiRegularServer class="fill-slate-800" size={30} />
                </div>
                <div>
                  <h3 class="text-2xl">Sook.6th</h3>
                </div>
              </div>
              <a
                href="https://sbtn.tokyo"
                target="_blank"
                rel="noreferrer noopener"
                class="py-5 px-8 bg-gray-100 duration-200 hover:bg-gray-300 flex justify-between"
              >
                <h4 class="text-xl">SBTN Server</h4>
                <RiArrowsArrowRightSLine size={30} />
              </a>
              <a
                href="https://moisskey.com"
                target="_blank"
                rel="noreferrer noopener"
                class="py-5 px-8 bg-gray-100 duration-200 hover:bg-gray-300 flex justify-between"
              >
                <h4 class="text-xl">Moisskey</h4>
                <RiArrowsArrowRightSLine size={30} />
              </a>
              <a
                href="https://spb.wmsci.com"
                target="_blank"
                rel="noreferrer noopener"
                class="py-5 px-8 bg-gray-100 duration-200 hover:bg-gray-300 flex justify-between"
              >
                <h4 class="text-xl">SPBUploader</h4>
                <RiArrowsArrowRightSLine size={30} />
              </a>
            </div>
            <div class="flex flex-col mb-8">
              <div class="bg-slate-800 text-white p-8 flex items-center gap-5 rounded-t-xl">
                <div class="p-3 bg-white rounded-full inline-block">
                  <BiRegularServer class="fill-slate-800" size={30} />
                </div>
                <div>
                  <h3 class="text-2xl">den2-main</h3>
                </div>
              </div>
              <a
                href="https://gnusocial.wmsci.com"
                target="_blank"
                rel="noreferrer noopener"
                class="py-5 px-8 bg-gray-100 duration-200 hover:bg-gray-300 flex justify-between"
              >
                <h4 class="text-xl">WMSocial</h4>
                <RiArrowsArrowRightSLine size={30} />
              </a>
              <a
                href="https://git.wmsci.com"
                target="_blank"
                rel="noreferrer noopener"
                class="py-5 px-8 bg-gray-100 duration-200 hover:bg-gray-300 flex justify-between"
              >
                <h4 class="text-xl">ClonkClock</h4>
                <RiArrowsArrowRightSLine size={30} />
              </a>
              <a
                href="https://blog.wmsci.com"
                target="_blank"
                rel="noreferrer noopener"
                class="py-5 px-8 bg-gray-100 duration-200 hover:bg-gray-300 flex justify-between"
              >
                <h4 class="text-xl">Acto</h4>
                <RiArrowsArrowRightSLine size={30} />
              </a>
              <a
                href="https://blog.vcborn.com"
                target="_blank"
                rel="noreferrer noopener"
                class="py-5 px-8 bg-gray-100 duration-200 hover:bg-gray-300 flex justify-between"
              >
                <h4 class="text-xl">VCborn Blog</h4>
                <RiArrowsArrowRightSLine size={30} />
              </a>
              <a
                href="https://ja1ykl.com"
                target="_blank"
                rel="noreferrer noopener"
                class="py-5 px-8 bg-gray-100 duration-200 hover:bg-gray-300 flex justify-between"
              >
                <h4 class="text-xl">電気通信部</h4>
                <RiArrowsArrowRightSLine size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
