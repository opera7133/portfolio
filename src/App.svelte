<script>
  import IoLogoTwitter from 'svelte-icons/io/IoLogoTwitter.svelte'
  import IoLogoGithub from 'svelte-icons/io/IoLogoGithub.svelte'
  import FaYoutube from 'svelte-icons/fa/FaYoutube.svelte'
  import FaKeybase from 'svelte-icons/fa/FaKeybase.svelte'
  import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte'
  import FaTelegramPlane from 'svelte-icons/fa/FaTelegramPlane.svelte'
  import FaAmazon from 'svelte-icons/fa/FaAmazon.svelte'
  import FaPenNib from 'svelte-icons/fa/FaPenNib.svelte'
  import { _, init, addMessages, getLocaleFromNavigator } from 'svelte-i18n'
  import Image from 'svelte-image'

  import en from './en.json'
  import ja from './ja.json'

  addMessages('en', en)
  addMessages('ja', ja)

  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
  })

  const mail = 'ainznino@pm.me'

  const Skill = [
    { title: 'HTML', color: '#ed6a47', per: '90' },
    { title: 'CSS', color: '#4968e3', per: '90' },
    { title: 'JS', color: '#f7df1e', per: '60' },
    { title: 'Next.js', color: '#000', per: '30' },
    { title: 'Svelte', color: '#ff3e00', per: '20' },
  ]

  const myWorks = [
    {
      title: 'Blonde',
      image: '/img/works/blonde.webp',
      url: 'https://blonde.pages.dev',
    },
    {
      title: 'Tella',
      image: '/img/works/tella.webp',
      url: 'https://tella.pages.dev',
    },
    {
      title: 'VNovel',
      image: '/img/works/vnovel.webp',
      url: 'https://vnovel.pages.dev',
    },
    {
      title: 'Tech Club',
      image: '/img/works/tclb.webp',
      url: 'https://www.tclb.cf',
    },
    {
      title: 'Acto',
      image: '/img/works/acto.webp',
      url: 'https://blog.wmsci.com',
    },
    {
      title: 'LightCube',
      image: '/img/works/lightcube.webp',
      url: 'https://www.lccs.ml',
    },
    {
      title: 'SPBUploader',
      image: '/img/works/spbuploader.webp',
      url: 'https://spb.wmsci.com',
    },
    {
      title: 'Unicode Guessing',
      image: '/img/works/unicode.webp',
      url: 'https://wmsci.com/unicode/',
    },
    {
      title: 'DLBase',
      image: '/img/works/dlbase.webp',
      url: 'https://dlbase.cf',
    },
  ]

  export const SNS = [
    {
      title: 'Twitter',
      icon: IoLogoTwitter,
      url: 'https://twitter.com/scgame_m',
    },
    {
      title: 'Github',
      icon: IoLogoGithub,
      url: 'https://github.com/opera7133',
    },
    {
      title: 'Youtube',
      icon: FaYoutube,
      url: 'https://www.youtube.com/channel/UCWwPrIQCPvjH3mce-CVfCIA',
    },
    { title: 'Keybase', icon: FaKeybase, url: 'https://keybase.io/opera7133' },
    { title: 'Telegram', icon: FaTelegramPlane, url: 'https://t.me/wamo_sc' },
    {
      title: 'Amazon',
      icon: FaAmazon,
      url: 'https://www.amazon.jp/hz/wishlist/ls/2ST3GH743NLVN?ref_=wl_share',
    },
    {
      title: 'Blog',
      icon: FaPenNib,
      url: 'https://blog.wmsci.com',
    },
  ]
</script>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  .icon {
    width: 32px;
    height: 32px;
  }
  html {
    font-family: 'Open Sans', 'Noto Sans JP';
    scroll-behavior: smooth;
  }
</style>

<svelte:head>
  <style>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&family=Noto+Sans+JP&display=swap');
  </style>
</svelte:head>
<main class="overflow-x-hidden">
  <div
    class="dark:bg-gray-800 dark:text-white px-5 flex justify-center
    items-center h-screen flex-col">
    <div class="items-center container max-w-6xl">
      <h1 class="lowercase text-6xl pb-5">wamo</h1>
      <p class="text-2xl">{$_('short_about')}</p>
      <div class="pt-5 flex flex-row">
        {#each SNS as sns}
          <a
            href={sns.url}
            target="_blank"
            aria-label={sns.title}
            rel="noopener noreferrer">
            <div
              class="h-8 w-8 mx-2 duration-100 hover:opacity-80 text-black
              dark:text-white">
              <svelte:component this={sns.icon} />
            </div>
          </a>
        {/each}
      </div>
    </div>
    <a
      class="border-0 focus:outline-none absolute bottom-8 w-6 h-6
      animate-bounce cursor-pointer text-black left-1/2"
      href="/#about"
      aria-label="Next Section">
      <div class="relative -left-1/2 text-black dark:text-white">
        <FaChevronDown />
      </div>
    </a>
  </div>
  <div
    class="dark:bg-gray-800 px-5 flex justify-center items-center h-screen
    flex-col"
    id="about">
    <div class="relative items-center container max-w-4xl">
      <div
        class="bg-white dark:bg-gray-700 rounded-lg shadow-xl absolute py-14
        px-40 -top-14 -left-10 transform -rotate-6 z-0" />
    </div>
    <div class="relative items-center container max-w-4xl">
      <div
        class="bg-white dark:bg-gray-700 dark:text-white rounded-lg shadow-xl
        p-10">
        <h2 class="text-5xl font-bold">About</h2>
        <Image
          class="absolute right-5 -top-10 rounded-full h-28"
          src="/img/icon.webp"
          alt="avatar" />
        <p class="py-3 text-xl">{$_('long_about')}</p>
        <div
          class="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-xs
          lg:max-w-lg">
          {#each Skill as skill}
            <div class="relative m-1">
              <div
                class="percent w-24 h-24 rounded-full"
                style="background-image: conic-gradient({skill.color} 0% {skill.per}%,
                #d9d9d9 {skill.per}% 100%);" />
              <div
                class="absolute top-2 left-2 bg-white dark:bg-gray-700 w-20 h-20
                rounded-full">
                <p class="pt-7 text-center">{skill.title}</p>
              </div>
            </div>
          {/each}
        </div>
        <div
          class="bg-white dark:bg-gray-700 rounded-lg shadow-xl absolute right-0
          md:-right-10 py-14 px-20 transform rotate-12" />
      </div>
    </div>
  </div>
  <div
    class="dark:bg-gray-800 px-5 flex justify-center items-center h-full
    flex-col py-32"
    id="works">
    <div class="items-center container max-w-6xl">
      <div
        class="bg-white dark:bg-gray-700 dark:text-white rounded-lg shadow-xl
        p-5 md:p-10">
        <h2 class="text-5xl font-bold">Works</h2>
        <p class="text-xl py-3">{$_('works')}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {#each myWorks as work}
            <div>
              <a href={work.url} target="_blank" rel="noopener noreferrer">
                <Image
                  class="rounded-lg hover:opacity-70 duration-200"
                  src={work.image}
                  alt={work.title} />
              </a>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
  <div
    class="dark:bg-gray-800 px-5 relative flex justify-center items-center
    h-screen flex-col"
    id="contact">
    <div class="items-center container max-w-4xl">
      <div
        class="bg-white dark:bg-gray-700 dark:text-white border-0 rounded-lg
        shadow-xl p-10">
        <h2 class="text-5xl font-bold">Get in touch</h2>
        <p class="py-3 text-xl">{$_('contact')}</p>
        <p class="text-xl">
          E-Mail:
          <a class="text-blue-600" href="mailto:{mail}">{mail}</a>
        </p>
        <p class="text-xl">
          Twitter:
          <a class="text-blue-600" href="https://twitter.com/scgame_m">
            @scgame_m
          </a>
        </p>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 py-3 px-5 dark:text-white">
      &copy; 2021
      <a href="/" class="text-blue-600">wamo</a>
    </div>
  </div>
</main>
