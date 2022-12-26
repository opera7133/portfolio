import { FaBrandsDiscord, FaBrandsKeybase, FaBrandsTelegram, FaBrandsTwitter, FaSolidEnvelope } from 'solid-icons/fa';
import { Component } from 'solid-js';
import { MetaProvider, Title } from 'solid-meta';

const Contact: Component<{}> = () => {
  return (
    <>
      <MetaProvider>
        <Title>Contact | wamo</Title>
      </MetaProvider>
      <div class="mt-28 pb-32 md:pb-0">
        <div class="container mx-auto max-w-7xl z-20">
          <div class="mx-4">
            <h2 class="text-3xl mb-4 font-semibold font-futura">Contact</h2>
            <p>依頼、配布物、その他お問い合わせ等ありましたらこちらからどうぞ。<br/>メールまたはTelegramで連絡していただけると助かります。</p>
            <div class="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-ols-3 lg:grid-cols-4 gap-4 mt-10">
                <a href="mailto:ainznino@pm.me">
                  <div class="bg-zinc-800 flex flex-row items-center px-4 py-3 rounded-lg gap-4 drop-shadow-lg hover:drop-shadow duration-300">
                    <FaSolidEnvelope size={24} color="#FFF" />
                    <div>
                      <h4 class="font-semibold text-lg">Mail</h4>
                      <p>ainznino@pm.me</p>
                    </div>
                  </div>
                </a>
                <div class="bg-discord flex flex-row items-center px-4 py-3 rounded-lg gap-4 drop-shadow-lg hover:drop-shadow duration-300">
                    <FaBrandsDiscord size={24} color="#FFF" />
                    <div>
                      <h4 class="font-semibold text-lg">Discord</h4>
                      <p>wamo#8600</p>
                    </div>
                  </div>
                <a href="https://twitter.com/scgame_m" target="_blank" rel="noopener noreferrer">
                  <div class="bg-twitter flex flex-row items-center px-4 py-3 rounded-lg gap-4 drop-shadow-lg hover:drop-shadow duration-300">
                    <FaBrandsTwitter size={24} color="#FFF" />
                    <div>
                      <h4 class="font-semibold text-lg">Twitter</h4>
                      <p>@scgame_m</p>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
