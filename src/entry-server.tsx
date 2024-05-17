// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <link rel="icon" type="image/png" href="/img/favicon.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="wamo" />
          <meta name="og:description" content="wamo portfolio" />
          <meta name="description" content="wamo portfolio" />
          <meta name="og:title" content="wamo" />
          <meta name="og:url" content="https://wmsci.com" />
          <meta name="og:image" content="https://wmsci.com/img/news-icon.png" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:image"
            content="https://wmsci.com/img/news-icon.png"
          />
          <meta name="twitter:site" content="@scgame_m" />
          <link rel="sitemap" href="sitemap.xml" type="application/xml" />
          <link rel="stylesheet" href="https://use.typekit.net/gdc2fvk.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique:wght@400;500;700&display=swap"
          />
          <script
            async
            src="https://analytics.ja1ykl.com/script.js"
            data-website-id="e0fa97aa-eac4-47b7-b14b-710f6224c81d"
          ></script>
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
