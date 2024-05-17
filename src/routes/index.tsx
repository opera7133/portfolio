import { MetaProvider, Title } from "@solidjs/meta";

const Home = () => {
  const sentenceList = [
    "Pretending to be busy.",
    "There's never enough time.",
    "So far so good.",
  ];
  const sentence =
    sentenceList[Math.floor(Math.random() * sentenceList.length)];
  return (
    <main>
      <MetaProvider>
        <Title>wamo</Title>
      </MetaProvider>
      <div class="overflow-hidden relative">
        <div class="flex flex-col justify-center h-screen">
          <div class="container mx-auto max-w-5xl z-20">
            <div class="mx-4 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
              <img
                src="/img/wamo.jpg"
                alt="usericon"
                class="rounded-full w-36 shadow-md"
              />
              <div>
                <h2 class="text-5xl pb-2 font-semibold font-futura">wamo</h2>
                <p class="text-3xl pb-4 font-futura">{sentence}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="w-screen absolute -bottom-16 left-0 bg-blue-700">
          <div innerHTML="<!--\nCopyright (c) 2017 Ted McDonald (@tedmcdo)\nReleased under the MIT license\nhttp://opensource.org/licenses/mit-license.php\n-->"></div>
          <div class="wave h-48 absolute -top-48 w-[6400px]"></div>
          <div class="wave h-48 absolute -top-44 w-[6400px] opacity-100"></div>
        </div>
      </div>
    </main>
  );
};

export default Home;
