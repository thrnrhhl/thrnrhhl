import './globals.css'
import type { Metadata } from 'next';
import favicon from './favicon.ico';
import Script from 'next/script';
import { Unbounded, Ubuntu } from 'next/font/google'


export const metadata: Metadata = {
  title: 'thrnrhhl',
  description: 'Портфолио Яковлева Павла фронтенд-разработчика middle-уровня',
  keywords: 'фронтенд, разработчик, портфолио, Middle, лидер команды, веб-приложения, middle frontend, мидл фронтенд'
}

const unbounded = Unbounded({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['cyrillic', 'latin']
});

const ubuntuFont = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['cyrillic', 'latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="ru">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="og:title" property="og:title" content="thrnrhhl" />
        <meta name="og:description" property="og:description" content="Портфолио Яковлева Павла фронтенд-разработчика middle-уровня" />
        <meta name="og:image" property="og:image" content="/og_image.png" />
        <meta name="og:url" property="og:url" content="https://thrnrhhl.vercel.app" />
        <link rel="icon" type="image/x-icon" href={favicon.src} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&family=Unbounded:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Yandex.Metrika counter */}
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(94955185, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true
                });
            `
          }}
        />

        <noscript><div><img src="https://mc.yandex.ru/watch/94955185" style={{ position: 'absolute', left: -9999 }} alt="" /></div></noscript>
        {/* /Yandex.Metrika counter */}
      </head>
      <body className={[unbounded.className, ubuntuFont.className, 'h-full'].join(' ')}>
        {children}
      </body>
    </html>
  )
}
