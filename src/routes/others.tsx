import { MetaProvider, Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import { VsServer } from "solid-icons/vs";
import { IoMail } from "solid-icons/io";
import { RiDocumentFileEditLine, RiOthersLightbulbFill } from "solid-icons/ri";
import { TbPlayerTrackPrevFilled } from "solid-icons/tb";
import { BsPcDisplay } from "solid-icons/bs";

const Others = () => {
  return (
    <main>
      <MetaProvider>
        <Title>Others | wm.sci</Title>
      </MetaProvider>
      <div class="mt-28">
        <div class="container mx-auto max-w-7xl pb-20 z-20">
          <div class="mx-4">
            <h2 class="text-3xl mb-4 font-semibold font-futura">Others</h2>
            <div class="flex flex-col md:flex-row flex-wrap gap-2 md:items-start">
              <A
                href="/contact"
                class="bg-black px-8 py-6 md:h-40 text-white rounded-lg flex flex-col gap-2"
              >
                <IoMail class="fill-white" size={48} />
                <h3 class="text-xl font-bold">Contact</h3>
                <p>ポートフォリオや運営サービスの質問等々</p>
              </A>
              <A
                href="/commission"
                class="bg-black px-8 py-6 md:h-40 text-white rounded-lg flex flex-col gap-2"
              >
                <RiDocumentFileEditLine class="fill-white" size={48} />
                <h3 class="text-xl font-bold">Commission</h3>
                <p>サイト・アプリ等制作の依頼について</p>
              </A>
              <A
                href="/interests"
                class="bg-black px-8 py-6 md:h-40 text-white rounded-lg flex flex-col gap-2"
              >
                <RiOthersLightbulbFill class="fill-white" size={48} />
                <h3 class="text-xl font-bold">Interests</h3>
                <p>最近聞いてる音楽とか</p>
              </A>
              <A
                href="/previous"
                class="bg-black px-8 py-6 md:h-40 text-white rounded-lg flex flex-col gap-2"
              >
                <TbPlayerTrackPrevFilled class="fill-white" size={48} />
                <h3 class="text-xl font-bold">Previous</h3>
                <p>以前のポートフォリオ</p>
              </A>
              <A
                href="/workspace"
                class="bg-black px-8 py-6 md:h-40 text-white rounded-lg flex flex-col gap-2"
              >
                <BsPcDisplay class="fill-white" size={48} />
                <h3 class="text-xl font-bold">Workspace</h3>
                <p>作業環境</p>
              </A>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Others;
