import nextjs from "../img/skills/nextjs.svg";
import solidjs from "../img/skills/solidjs.svg";
import typescript from "../img/skills/typescript.svg";
import tailwindcss from "../img/skills/tailwindcss.svg";
import flutter from "../img/skills/flutter.svg";
import php from "../img/skills/php.svg";
import python from "../img/skills/python.svg";
import csharp from "../img/skills/csharp.svg";
import electron from "../img/skills/electron.svg";
import react from "../img/skills/react.svg";
import {
  FaBrandsAmazon,
  FaBrandsGithub,
  FaBrandsKeybase,
  FaBrandsTelegram,
  FaBrandsTwitter,
  FaBrandsYoutube,
  FaBrandsSoundcloud,
  FaSolidMugSaucer,
  FaSolidPenNib,
  FaSolidSquare,
} from "solid-icons/fa";
import { SiNiconico, SiBilibili, SiMisskey } from "solid-icons/si";
import { FiRadio } from "solid-icons/fi";
import { MetaProvider, Title } from "@solidjs/meta";
import LinkCard from "~/components/LinkCard";
import { histories } from "./histories.data";
import { CircularProgress } from "~/components/CircularProgress";

const About = () => {
  return (
    <main>
      <MetaProvider>
        <Title>About | wm.sci</Title>
      </MetaProvider>
      <div class="mt-28">
        <div class="container mx-auto max-w-7xl pb-20 z-20">
          <div class="mx-4">
            <h2 class="text-3xl mb-4 font-semibold font-futura">About</h2>
            <div class="mb-12">
              <h3 class="text-5xl mb-3 font-semibold font-futura">wamo</h3>
              <p class="text-2xl font-semibold text-neutral-500 mb-4 font-futura">
                [Frontend, Backend] Developer, Designer
              </p>
              <p>
                wamoと申します。
                <br />
                ウェブサイト制作、サーバー管理、動画制作、ロゴ制作など色々やっています。
              </p>
            </div>
            <div class="mb-12">
              <h3 class="text-3xl my-4 font-semibold font-futura">Histories</h3>
              <div class="flex flex-col ml-8">
                {histories.map((history) => (
                  <div class="group pl-6 border-l-2 border-black relative py-4">
                    <div class="absolute bg-black p-3 rounded-full -left-[13px] top-5">
                      <div class="absolute left-1 top-1 bg-white group-hover:bg-black duration-200 p-2 rounded-full"></div>
                    </div>
                    <h4 class="font-semibold text-lg">{history.event}</h4>
                    <p>{history.date}</p>
                  </div>
                ))}
              </div>
            </div>
            <div class="mb-12">
              <h3 class="text-3xl my-4 font-semibold font-futura">Socials</h3>
              <div class="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-ols-3 lg:grid-cols-4 gap-4">
                <LinkCard
                  href="https://www.youtube.com/@wamo"
                  title="YouTube"
                  user="@wamo"
                  icon={FaBrandsYoutube}
                  className="bg-youtube"
                />
                <LinkCard
                  href="https://twitter.com/scgame_m"
                  title="Twitter"
                  user="@scgame_m"
                  icon={FaBrandsTwitter}
                  className="bg-twitter"
                />
                <LinkCard
                  href="https://github.com/opera7133"
                  title="GitHub"
                  user="opera7133"
                  icon={FaBrandsGithub}
                  className="bg-github"
                />
                <LinkCard
                  href="https://bsky.app/profile/wmsci.com"
                  title="Bluesky"
                  user="@wmsci.com"
                  icon={FaSolidSquare}
                  className="bg-[#0085ff]"
                />
                <LinkCard
                  href="https://misskey.io/@wamo"
                  title="Misskey.io"
                  user="wamo@misskey.io"
                  icon={SiMisskey}
                  className="bg-[#86b300]"
                />
                <LinkCard
                  href="https://www.nicovideo.jp/user/72238400"
                  title="Niconico (main)"
                  user="わも"
                  icon={SiNiconico}
                  className="bg-[#252525]"
                />
                <LinkCard
                  href="https://www.nicovideo.jp/user/124870787"
                  title="Niconico (sub)"
                  user="わも"
                  icon={SiNiconico}
                  className="bg-[#252525]"
                />
                <LinkCard
                  href="https://space.bilibili.com/1269277407"
                  title="Bilibili"
                  user="wamosc"
                  icon={SiBilibili}
                  className="bg-[#07A3D7]"
                />
                <LinkCard
                  href="https://soundcloud.com/wamo0"
                  title="SoundCloud"
                  user="wamo0"
                  icon={FaBrandsSoundcloud}
                  className="bg-[#ff5500]"
                />
                <LinkCard
                  href="https://keybase.io/opera7133"
                  title="Keybase"
                  user="opera7133"
                  icon={FaBrandsKeybase}
                  className="bg-[#ff6f21]"
                />
                <LinkCard
                  href="https://t.me/wamosc"
                  title="Telegram"
                  user="wamosc"
                  icon={FaBrandsTelegram}
                  className="bg-telegram"
                />
                <LinkCard
                  href="https://ko-fi.com/wamosc"
                  title="Ko-fi"
                  user="wamosc"
                  icon={FaSolidMugSaucer}
                  className="bg-[#FF5E5B]"
                />
                <LinkCard
                  href="https://www.amazon.jp/hz/wishlist/ls/2ST3GH743NLVN?ref_=wl_share"
                  title="Amazon"
                  user="欲しい物リスト"
                  icon={FaBrandsAmazon}
                  className="bg-amazon"
                />
                <LinkCard
                  href="https://blog.wmsci.com"
                  title="Blog"
                  user="Acto"
                  icon={FaSolidPenNib}
                  className="bg-[#222]"
                />
                <LinkCard
                  href="https://wamo.enoki.xyz"
                  title="エンカ録™"
                  user="wamo.enoki.xyz"
                  icon={FaSolidPenNib}
                  className="bg-[#222]"
                />
                <LinkCard
                  title="無線局"
                  user="JK1UPE"
                  icon={FiRadio}
                  className="bg-[#111]"
                />
              </div>
            </div>
            <div>
              <h3 class="text-3xl my-4 font-semibold font-futura">Skills</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-ols-3 lg:grid-cols-4 gap-4">
                <CircularProgress
                  title="Next.js"
                  color="#000"
                  percent={70}
                  icon={nextjs}
                />
                <CircularProgress
                  title="React"
                  color="#60DDFD"
                  percent={50}
                  icon={react}
                />
                <CircularProgress
                  title="Electron"
                  color="#282B36"
                  percent={70}
                  icon={electron}
                />
                <CircularProgress
                  title="Solid.js"
                  color="#2c4f7c"
                  percent={40}
                  icon={solidjs}
                />
                <CircularProgress
                  title="TypeScript"
                  color="#3179c6"
                  percent={60}
                  icon={typescript}
                  width="w-10"
                />
                <CircularProgress
                  title="TailwindCSS"
                  color="#38bdf8"
                  percent={80}
                  icon={tailwindcss}
                />
                <CircularProgress
                  title="Flutter"
                  color="#0553B1"
                  percent={35}
                  icon={flutter}
                  width="w-9"
                />
                <CircularProgress
                  title="PHP"
                  color="#474A8A"
                  percent={45}
                  icon={php}
                />
                <CircularProgress
                  title="C#"
                  color="#189F21"
                  percent={30}
                  icon={csharp}
                />
                <CircularProgress
                  title="Python"
                  color="#306998"
                  percent={65}
                  icon={python}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
