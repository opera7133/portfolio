import { MetaProvider, Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import { VsServer } from "solid-icons/vs";
import { IoMail } from "solid-icons/io";
import { RiDocumentFileEditLine } from "solid-icons/ri";

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
            <div class="flex flex-col md:flex-row gap-2 items-start">
              <A
                href="/services"
                class="bg-black px-8 py-6 h-40 text-white rounded-lg flex flex-col gap-2"
              >
                <VsServer class="fill-white" size={48} />
                <h3 class="text-xl font-bold">Services</h3>
                <p>wamoが運営しているサービスの一覧</p>
              </A>
              <A
                href="/contact"
                class="bg-black px-8 py-6 h-40 text-white rounded-lg flex flex-col gap-2"
              >
                <IoMail class="fill-white" size={48} />
                <h3 class="text-xl font-bold">Contact</h3>
                <p>ポートフォリオや運営サービスの質問等々</p>
              </A>
              <A
                href="/commission"
                class="bg-black px-8 py-6 h-40 text-white rounded-lg flex flex-col gap-2"
              >
                <RiDocumentFileEditLine class="fill-white" size={48} />
                <h3 class="text-xl font-bold">Commission</h3>
                <p>サイト・アプリ等制作の依頼について</p>
              </A>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Others;
