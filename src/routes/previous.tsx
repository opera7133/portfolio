import { MetaProvider, Title } from "@solidjs/meta";

const Interests = () => {
  return (
    <main>
      <MetaProvider>
        <Title>Previous | wm.sci</Title>
      </MetaProvider>
      <div class="mt-28 pb-32 md:pb-0">
        <div class="container mx-auto max-w-7xl z-20">
          <div class="mx-4">
            <h2 class="text-3xl mb-4 font-semibold font-futura">Previous</h2>
            <h3 class="text-2xl font-semibold">以前のポートフォリオ</h3>
            <p class="my-4">
              過去に3回ほどポートフォリオをリニューアルしています。
            </p>
            <div class="mb-4">
              <h4 class="text-xl font-semibold">v1: 2020年~</h4>
              <a
                href="https://v1.wmsci.com"
                target="_blank"
                rel="noreferrer noopener"
                class="underline"
              >
                https://v1.wmsci.com
              </a>
              <p>
                当時書くことのできたHugoで作成しています。サイト用に作ったテーマは公開していましたが、汎用性が低いためやめました。
              </p>
            </div>
            <div class="mb-4">
              <h4 class="text-xl font-semibold">v2: 2021年~</h4>
              <a
                href="https://v2.wmsci.com"
                target="_blank"
                rel="noreferrer noopener"
                class="underline"
              >
                https://v2.wmsci.com
              </a>
              <p>
                2021年9月にSvelteで書き直しました。ルーティングがわからなかったためシングルページです。
              </p>
            </div>
            <div class="mb-4">
              <h4 class="text-xl font-semibold">v3: 2022年~</h4>
              <a
                href="https://wmsci.com"
                target="_blank"
                rel="noreferrer noopener"
                class="underline"
              >
                https://wmsci.com
              </a>
              <p>
                2022年3月にSolid.jsで書き直しました。ルーティングはsolid-app-routerで自前で作っています。
              </p>
            </div>
            <div class="mb-4">
              <h4 class="text-xl font-semibold">v4: 2024年~</h4>
              <a
                href="https://wmsci.com"
                target="_blank"
                rel="noreferrer noopener"
                class="underline"
              >
                https://wmsci.com
              </a>
              <p>
                2024年3月にSolidStartに移行しました。見た目は変わっていませんが、コードが綺麗になりました。
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Interests;
