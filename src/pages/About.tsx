import { Component } from 'solid-js';
import nextjs from '../img/skills/nextjs.svg';
import solidjs from '../img/skills/solidjs.svg';
import typescript from '../img/skills/typescript.svg';
import tailwindcss from '../img/skills/tailwindcss.svg';
import flutter from '../img/skills/flutter.svg';
import php from '../img/skills/php.svg';
import python from '../img/skills/python.svg';
import {
  FaBrandsAmazon,
  FaBrandsGithub,
  FaBrandsKeybase,
  FaBrandsTelegram,
  FaBrandsTwitter,
  FaBrandsYoutube,
  FaSolidCoffee,
  FaSolidPenNib,
  FaSolidVrCardboard,
} from 'solid-icons/fa';
import { SiNiconico, SiBilibili } from 'solid-icons/si'
import { MetaProvider, Title } from 'solid-meta';

const About: Component<{}> = () => {
  return (
    <>
    <MetaProvider>
        <Title>About | wamo</Title>
      </MetaProvider>
      <div class="mt-28">
        <div class="container mx-auto max-w-7xl pb-20 z-20">
          <div class="mx-4">
            <h2 class="text-3xl mb-4 font-semibold font-futura">About</h2>
            <div class="mb-12">
              <h3 class="text-5xl mb-3 font-semibold font-futura">wamo</h3>
              <p class="text-2xl font-semibold text-neutral-500 mb-4 font-futura">Frontend, Backend Developer</p>
              <p>
                wamoと申します。
                <br />
                ウェブサイト制作、サーバー管理、動画制作、ロゴ制作など色々やっています。
              </p>
            </div>
            <div class="mb-12">
              <h3 class="text-3xl my-4 font-semibold font-futura">Histories</h3>
              <div class="flex flex-col ml-8">
                <div class='group pl-6 border-l-2 border-black relative py-4'>
                  <div class='absolute bg-black p-3 rounded-full -left-[13px] top-5'>
                    <div class='absolute left-1 top-1 bg-white group-hover:bg-black duration-200 p-2 rounded-full'></div>
                  </div>
                  <h4 class="font-semibold text-lg">基本情報技術者試験合格</h4>
                  <p>2022/05</p>
                </div>
                <div class='group pl-6 border-l-2 border-black relative py-4'>
                  <div class='absolute bg-black p-3 rounded-full -left-[13px] top-5'>
                    <div class='absolute left-1 top-1 bg-white group-hover:bg-black duration-200 p-2 rounded-full'></div>
                  </div>
                  <h4 class="font-semibold text-lg">情報セキュリティマネジメント試験合格</h4>
                  <p>2021/12</p>
                </div>
                <div class='group pl-6 border-l-2 border-black relative py-4'>
                  <div class='absolute bg-black p-3 rounded-full -left-[13px] top-5'>
                    <div class='absolute left-1 top-1 bg-white group-hover:bg-black duration-200 p-2 rounded-full'></div>
                  </div>
                  <h4 class="font-semibold text-lg">東京都立産業技術高等専門学校品川キャンパスに入学</h4>
                  <p>2021/04</p>
                </div>
              </div>
            </div>
            <div class="mb-12">
              <h3 class="text-3xl my-4 font-semibold font-futura">Socials</h3>
              <div class="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-ols-3 lg:grid-cols-4 gap-4">
                <a
                  href="https://www.youtube.com/@wamo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div class="bg-youtube flex flex-row items-center px-4 py-3 rounded-lg gap-4 drop-shadow-lg hover:drop-shadow duration-300">
                    <FaBrandsYoutube size={24} color="#FFF" />
                    <div>
                      <h4 class="font-semibold text-lg">Youtube</h4>
                      <p>wamo</p>
                    </div>
                  </div>
                </a>
                <a href="https://twitter.com/scgame_m" target="_blank" rel="noopener noreferrer">
                  <div class="bg-twitter flex flex-row items-center px-4 py-3 rounded-lg gap-4 drop-shadow-lg hover:drop-shadow duration-300">
                    <FaBrandsTwitter size={24} color="#FFF" />
                    <div>
                      <h4 class="font-semibold text-lg">Twitter</h4>
                      <p>@scgame_m</p>
                    </div>
                  </div>
                </a>
                <a href="https://github.com/opera7133" target="_blank" rel="noopener noreferrer">
                  <div class="bg-github flex flex-row items-center px-4 py-3 rounded-lg gap-4 drop-shadow-lg hover:drop-shadow duration-300">
                    <FaBrandsGithub size={24} color="#FFF" />
                    <div>
                      <h4 class="font-semibold text-lg">GitHub</h4>
                      <p>opera7133</p>
                    </div>
                  </div>
                </a>
                <a href="https://www.nicovideo.jp/user/124870787" target="_blank" rel="noopener noreferrer">
                  <div class="bg-[#252525] flex flex-row items-center px-4 py-3 rounded-lg gap-4 drop-shadow-lg hover:drop-shadow duration-300">
                    <SiNiconico size={24} color="#FFF" />
                    <div>
                      <h4 class="font-semibold text-lg">Niconico (main)</h4>
                      <p>わも</p>
                    </div>
                  </div>
                </a>
                <a href="https://www.nicovideo.jp/user/72238400" target="_blank" rel="noopener noreferrer">
                  <div class="bg-[#252525] flex flex-row items-center px-4 py-3 rounded-lg gap-4 drop-shadow-lg hover:drop-shadow duration-300">
                    <SiNiconico size={24} color="#FFF" />
                    <div>
                      <h4 class="font-semibold text-lg">Niconico (sub)</h4>
                      <p>わも</p>
                    </div>
                  </div>
                </a>
                <a href="https://space.bilibili.com/1269277407" target="_blank" rel="noopener noreferrer">
                  <div class="bg-[#07A3D7] flex flex-row items-center px-4 py-3 rounded-lg gap-4 drop-shadow-lg hover:drop-shadow duration-300">
                    <SiBilibili size={24} color="#FFF" />
                    <div>
                      <h4 class="font-semibold text-lg">Bilibili</h4>
                      <p>wamosc</p>
                    </div>
                  </div>
                </a>
                <a href="https://keybase.io/opera7133" target="_blank" rel="noopener noreferrer">
                  <div class="bg-[#ff6f21] flex flex-row items-center px-4 py-3 rounded-lg gap-4 drop-shadow-lg hover:drop-shadow duration-300">
                    <FaBrandsKeybase size={24} color="#FFF" />
                    <div>
                      <h4 class="font-semibold text-lg">Keybase</h4>
                      <p>opera7133</p>
                    </div>
                  </div>
                </a>
                <a href="https://t.me/wamo_sc" target="_blank" rel="noopener noreferrer">
                  <div class="bg-telegram flex flex-row items-center px-4 py-3 rounded-lg gap-4 drop-shadow-lg hover:drop-shadow duration-300">
                    <FaBrandsTelegram size={24} color="#FFF" />
                    <div>
                      <h4 class="font-semibold text-lg">Telegram</h4>
                      <p>wamo_sc</p>
                    </div>
                  </div>
                </a>
                <a
                  href="https://vrchat.com/home/user/usr_f5d27827-3a96-45ba-921f-10b0d2aa4213"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div class="bg-[#053c48] flex flex-row items-center px-4 py-3 rounded-lg gap-4 drop-shadow-lg hover:drop-shadow duration-300">
                    <FaSolidVrCardboard size={24} color="#FFF" />
                    <div>
                      <h4 class="font-semibold text-lg">VRChat</h4>
                      <p>wamosc</p>
                    </div>
                  </div>
                </a>
                <a href="https://ko-fi.com/wamosc" target="_blank" rel="noopener noreferrer">
                  <div class="bg-[#FF5E5B] flex flex-row items-center px-4 py-3 rounded-lg gap-4 drop-shadow-lg hover:drop-shadow duration-300">
                    <FaSolidCoffee size={24} color="#FFF" />
                    <div>
                      <h4 class="font-semibold text-lg">Ko-fi</h4>
                      <p>wamosc</p>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.amazon.jp/hz/wishlist/ls/2ST3GH743NLVN?ref_=wl_share"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div class="bg-amazon flex flex-row items-center px-4 py-3 rounded-lg gap-4 drop-shadow-lg hover:drop-shadow duration-300">
                    <FaBrandsAmazon size={24} color="#FFF" />
                    <div>
                      <h4 class="font-semibold text-lg">Amazon</h4>
                      <p>欲しい物リスト</p>
                    </div>
                  </div>
                </a>
                <a href="https://blog.wmsci.com" target="_blank" rel="noopener noreferrer">
                  <div class="bg-[#222] flex flex-row items-center px-4 py-3 rounded-lg gap-4 drop-shadow-lg hover:drop-shadow duration-300">
                    <FaSolidPenNib size={24} color="#FFF" />
                    <div>
                      <h4 class="font-semibold text-lg">Blog</h4>
                      <p>Acto</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <h3 class="text-3xl my-4 font-semibold font-futura">Skills</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-ols-3 lg:grid-cols-4 gap-4">
                <div class="flex flex-row items-center gap-4">
                  <div class="relative m-1">
                    <div
                      class="percent w-24 h-24 rounded-full"
                      style="background-image: conic-gradient(#000 0%, #000 60%, rgb(217, 217, 217) 60%, rgb(217, 217, 217) 100%);"
                    ></div>
                    <div class="flex justify-center items-center absolute top-2 left-2 bg-white w-20 h-20 rounded-full">
                      <img src={nextjs} class="w-12" />
                    </div>
                  </div>
                  <h4 class="font-semibold text-lg">Next.js</h4>
                </div>
                <div class="flex flex-row items-center gap-4">
                  <div class="relative m-1">
                    <div
                      class="percent w-24 h-24 rounded-full"
                      style="background-image: conic-gradient(#2c4f7c 0%, #2c4f7c 30%, rgb(217, 217, 217) 30%, rgb(217, 217, 217) 100%);"
                    ></div>
                    <div class="flex justify-center items-center absolute top-2 left-2 bg-white w-20 h-20 rounded-full">
                      <img src={solidjs} class="w-12" />
                    </div>
                  </div>
                  <h4 class="font-semibold text-lg">Solid.js</h4>
                </div>
                <div class="flex flex-row items-center gap-4">
                  <div class="relative m-1">
                    <div
                      class="percent w-24 h-24 rounded-full"
                      style="background-image: conic-gradient(#3179c6 0%, #3179c6 50%, rgb(217, 217, 217) 50%, rgb(217, 217, 217) 100%);"
                    ></div>
                    <div class="flex justify-center items-center absolute top-2 left-2 bg-white w-20 h-20 rounded-full">
                      <img src={typescript} class="w-10" />
                    </div>
                  </div>
                  <h4 class="font-semibold text-lg">TypeScript</h4>
                </div>
                <div class="flex flex-row items-center gap-4">
                  <div class="relative m-1">
                    <div
                      class="percent w-24 h-24 rounded-full"
                      style="background-image: conic-gradient(#38bdf8 0%, #38bdf8 80%, rgb(217, 217, 217) 80%, rgb(217, 217, 217) 100%);"
                    ></div>
                    <div class="flex justify-center items-center absolute top-2 left-2 bg-white w-20 h-20 rounded-full">
                      <img src={tailwindcss} class="w-12" />
                    </div>
                  </div>
                  <h4 class="font-semibold text-lg">TailwindCSS</h4>
                </div>
                <div class="flex flex-row items-center gap-4">
                  <div class="relative m-1">
                    <div
                      class="percent w-24 h-24 rounded-full"
                      style="background-image: conic-gradient(#0553B1 0%, #0553B1 25%, rgb(217, 217, 217) 25%, rgb(217, 217, 217) 100%);"
                    ></div>
                    <div class="flex justify-center items-center absolute top-2 left-2 bg-white w-20 h-20 rounded-full">
                      <img src={flutter} class="w-9" />
                    </div>
                  </div>
                  <h4 class="font-semibold text-lg">Flutter</h4>
                </div>
                <div class="flex flex-row items-center gap-4">
                  <div class="relative m-1">
                    <div
                      class="percent w-24 h-24 rounded-full"
                      style="background-image: conic-gradient(#474A8A 0%, #474A8A 45%, rgb(217, 217, 217) 45%, rgb(217, 217, 217) 100%);"
                    ></div>
                    <div class="flex justify-center items-center absolute top-2 left-2 bg-white w-20 h-20 rounded-full">
                      <img src={php} class="w-12" />
                    </div>
                  </div>
                  <h4 class="font-semibold text-lg">PHP</h4>
                </div>
                <div class="flex flex-row items-center gap-4">
                  <div class="relative m-1">
                    <div
                      class="percent w-24 h-24 rounded-full"
                      style="background-image: conic-gradient(#306998 0%, #306998 65%, rgb(217, 217, 217) 65%, rgb(217, 217, 217) 100%);"
                    ></div>
                    <div class="flex justify-center items-center absolute top-2 left-2 bg-white w-20 h-20 rounded-full">
                      <img src={python} class="w-12" />
                    </div>
                  </div>
                  <h4 class="font-semibold text-lg">Python</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
