import { RouteDataFunc } from 'solid-app-router';

export const list: { [key: string]: WorksInfo } = {
  'blonde': {
    img: '/img/works/blonde.jpg',
    title: 'Blonde',
    url: 'https://blonde.pages.dev',
    repo: 'https://github.com/opera7133/blonde',
    description: 'Blonde, Tailwind CSSを使ったシンプルなテーマ。',
  },
  'tella': {
    img: '/img/works/tella.jpg',
    title: 'Tella',
    url: 'https://tella.pages.dev',
    repo: 'https://github.com/opera7133/tella',
    description: 'Tella, 企業向けのHugoテーマ。',
  },
  'vnovel': {
    img: '/img/works/vnovel.jpg',
    title: 'VNovel',
    url: 'https://vnovel.pages.dev',
    repo: 'https://github.com/opera7133/vnovel',
    description: '小節のためのPixivみたいなHugoテーマ。',
  },
  'operandi': {
    img: '/img/works/operandi.jpg',
    title: 'Operandi',
    url: 'https://opr.wmsci.com',
    repo: 'https://github.com/opera7133/operandi',
    description: 'シンプルなWordpress向けテーマ。',
  },
  'tclb': {
    img: '/img/works/tclb.jpg',
    title: '技術科部',
    url: 'https://www.tclb.cf',
    description: '千葉大学教育学部附属中学校技術科部公式サイト。',
  },
  'acto': {
    img: '/img/works/acto.jpg',
    title: 'Acto',
    url: 'https://blog.wmsci.com',
    description: 'wamoのブログ。',
  },
  'lightcube': {
    img: '/img/works/lightcube.jpg',
    title: 'LightCube',
    url: 'https://www.lccs.ml',
    description: '中学校の学習指導要領に記載されている「双方向通信」「プログラムの構造を支える要素」を含んだプログラミングゲーム。',
  },
  'vcborn': {
    img: '/img/works/vcborn.jpg',
    title: 'VCborn',
    url: 'https://vcborn.com',
    description: 'VCLinuxを主に開発しているグループのウェブサイトとメンバー限定サイト。',
  },
  'mcborn': {
    img: '/img/works/mcborn.jpg',
    title: 'MCborn',
    url: 'https://mc.vcborn.com',
    description: 'VCbornが運営するマインクラフトサーバー。',
  },
  'spbuploader': {
    img: '/img/works/spbuploader.jpg',
    title: 'SPBUploader',
    url: 'https://spb.wmsci.com',
    repo: 'https://github.com/opera7133/spbuploader',
    description: 'Sparebeatの譜面とその楽曲をアップロードして、ウェブ上で遊べるアップローダ。',
  },
  'unicode': {
    img: '/img/works/unicode.jpg',
    title: 'Unicode文字当て',
    url: 'https://wmsci.com/unicode/',
    description: 'Unicodeのコードから何の文字か当てよう！',
  },
  'dlbase': {
    img: '/img/works/dlbase.jpg',
    title: 'DLBase',
    url: 'https://dlbase.cf',
    repo: 'https://github.com/opera7133/DLBase',
    description: 'Linkcoreみたいなページを作成。',
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