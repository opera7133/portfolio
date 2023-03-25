import { RouteDataFunc } from 'solid-app-router';

export const list: { [key: string]: WorksInfo } = {
  'moisskey': {
    img: '/img/works/moisskey.jpg',
    title: 'Moisskey',
    url: 'https://moisskey.com',
    repo: 'https://github.com/vcborn/moisskey',
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Prisma"],
    description: 'Misskey版Togetterです。\nいくつかの理由から宣伝はしていません。',
  },
  'spbuploader': {
    img: '/img/works/spbuploader.jpg',
    title: 'SPBUploader',
    url: 'https://spb.wmsci.com',
    repo: 'https://github.com/opera7133/spbuploader',
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Firebase"],
    description: 'Sparebeatの譜面とその楽曲をアップロードして、ウェブ上で遊べるアップローダ。\n2020年にPHPで作成後、2023年にNext.jsで書き直しました。',
  },
  'operandi': {
    img: '/img/works/operandi.jpg',
    title: 'Operandi',
    url: 'https://opr.wmsci.com',
    repo: 'https://github.com/opera7133/operandi',
    tech: ["WordPress", "PHP"],
    description: '初めて作ったWordPressのテーマです。\nCocoonとyStandardの中間あたりを意識して作りました。',
  },
  'blonde': {
    img: '/img/works/blonde.jpg',
    title: 'Blonde',
    url: 'https://blonde.pages.dev',
    repo: 'https://github.com/opera7133/blonde',
    tech: ["Hugo"],
    description: 'Tailwind CSSを使ったシンプルなテーマ。\nHugo版Cocoonのような見た目を目指しました。',
  },
  'tella': {
    img: '/img/works/tella.jpg',
    title: 'Tella',
    url: 'https://tella.pages.dev',
    repo: 'https://github.com/opera7133/tella',
    tech: ["Hugo"],
    description: '企業向けのHugoテーマ。\n技術科部で使用していたテーマを配布できる形にしたものです。',
  },
  'vnovel': {
    img: '/img/works/vnovel.jpg',
    title: 'VNovel',
    url: 'https://vnovel.pages.dev',
    repo: 'https://github.com/opera7133/vnovel',
    tech: ["Hugo"],
    description: '小説のためのPixivみたいなHugoテーマ。',
  },
  'tclb': {
    img: '/img/works/tclb.jpg',
    title: '技術科部',
    url: 'https://www.tclb.cf',
    tech: ["Hugo"],
    description: 'Hugoで制作。以前使用していたHugo Serifのレイアウトを可能な限り残しました。',
  },
  'acto': {
    img: '/img/works/acto.jpg',
    title: 'Acto',
    url: 'https://blog.wmsci.com',
    tech: ["WordPress"],
    description: 'wamoのブログ。',
  },
  'vcborn': {
    img: '/img/works/vcborn.jpg',
    title: 'VCborn',
    url: 'https://vcborn.com',
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Auth.js"],
    description: 'VCbornのウェブサイトを作成しました。',
  },
  'mcborn': {
    img: '/img/works/mcborn.jpg',
    title: 'MCborn',
    url: 'https://mc.vcborn.com',
    description: 'VCbornのマインクラフトサーバーを運営しています。',
  },
  'unicode': {
    img: '/img/works/unicode.jpg',
    title: 'Unicode文字当て',
    url: 'https://wmsci.com/unicode/',
    description: 'Unicodeのコードから文字が何であるかを当てるゲーム。',
  },
  'dlbase': {
    img: '/img/works/dlbase.jpg',
    title: 'DLBase',
    url: 'https://dlbase.cf',
    repo: 'https://github.com/opera7133/DLBase',
    tech: ["PHP"],
    description: 'Linkcoreみたいなページを作成するツール。',
  },
};

export const BlogData: RouteDataFunc = () => {
  return {
    get contents() {
      return list;
    },
    get archive() {
      return true;
    },
  };
};
