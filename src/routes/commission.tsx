import { FaSolidEnvelope } from "solid-icons/fa";
import { MetaProvider, Title } from "@solidjs/meta";
import LinkCard from "~/components/LinkCard";
import { A } from "@solidjs/router";

const Commission = () => {
  return (
    <main>
      <MetaProvider>
        <Title>Commission | wm.sci</Title>
      </MetaProvider>
      <div class="mt-28 pb-32 md:pb-0">
        <div class="container mx-auto max-w-7xl z-20">
          <div class="mx-4">
            <h2 class="text-3xl mb-4 font-semibold font-futura">Commission</h2>
            <p>
              過去の実績については
              <A class="underline" href="/works">
                Works
              </A>
              をご覧ください。
            </p>
            <ul class="list-disc ml-8">
              <li>ウェブサイトの制作</li>
              <li>ウェブアプリの制作</li>
              <li>ネイティブアプリの制作</li>
              <li>Wordpressテーマの制作</li>
              <li>Hugoテーマの制作</li>
              <li>ロゴデザイン</li>
              <li>動画制作</li>
            </ul>
            <p>などを承っております。</p>
            <br />
            <p>
              値段は納期や工数により変わりますが、クラウドソーシングサイトでの相場を目安とします。（なお、無償での依頼は受け付けておりません）
            </p>
            <p>お気軽に以下のメールアドレスまでお問い合わせください。</p>
            <br />
            <p>
              ※<code>ainznino@pm.me</code>
              までお送りいただいた場合、メールサービスの都合上
              <code>ainznino@proton.me</code>よりご連絡する場合がございます。
            </p>
            <div class="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-ols-3 lg:grid-cols-4 gap-4 mt-10">
              <LinkCard
                className="bg-zinc-800"
                icon={FaSolidEnvelope}
                title="Mail(main)"
                user="ainznino@pm.me"
                href="mailto:ainznino@pm.me"
              />
              <LinkCard
                className="bg-zinc-800"
                icon={FaSolidEnvelope}
                title="Mail(sub)"
                user="endxop@gmail.com"
                href="mailto:endxop@gmail.com"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Commission;
