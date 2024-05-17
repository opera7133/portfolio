import {
  FaBrandsDiscord,
  FaBrandsKeybase,
  FaBrandsTelegram,
  FaBrandsTwitter,
  FaSolidEnvelope,
} from "solid-icons/fa";
import { MetaProvider, Title } from "@solidjs/meta";
import LinkCard from "~/components/LinkCard";

const Contact = () => {
  return (
    <main>
      <MetaProvider>
        <Title>Contact | wamo</Title>
      </MetaProvider>
      <div class="mt-28 pb-32 md:pb-0">
        <div class="container mx-auto max-w-7xl z-20">
          <div class="mx-4">
            <h2 class="text-3xl mb-4 font-semibold font-futura">Contact</h2>
            <p>
              お仕事の依頼や配布物についての質問等々ありましたらこちらからどうぞ。
              <br />
              メールで連絡していただけると助かります。
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
              <LinkCard
                className="bg-discord"
                icon={FaBrandsDiscord}
                title="Discord"
                user="wamo#8600 / wamosc"
              />
              <LinkCard
                className="bg-twitter"
                icon={FaBrandsTwitter}
                title="Twitter"
                user="@scgame_m"
                href="https://twitter.com/scgame_m"
              />
              <LinkCard
                className="bg-[#ff6f21]"
                icon={FaBrandsKeybase}
                title="Keybase"
                user="opera7133"
                href="https://keybase.io/opera7133"
              />
              <LinkCard
                className="bg-telegram"
                icon={FaBrandsTelegram}
                title="Telegram"
                user="wamo_sc"
                href="https://t.me/wamo_sc"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
