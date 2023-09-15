import './globals.css'
import type { Metadata } from 'next';
import favicon from './favicon.ico';


export const metadata: Metadata = {
  title: 'thrnrhhl',
  description: 'Портфолио Яковлева Павла фронтенд-разработчика middle-уровня',
  keywords: 'фронтенд, разработчик, портфолио, Middle, лидер команды, веб-приложения, middle frontend, мидл фронтенд'
}

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
        <meta name="og:image" property="og:image" content="https://thrnrhhl.storage.yandexcloud.net/thrnrhhl_portfolio.png" />
        <meta name="og:url" property="og:url" content="https://thrnrhhl.vercel.app" />
        <link rel="icon" type="image/x-icon" href={favicon.src} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&family=Unbounded:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="backdrop-blur-[100px] bg-[#fff] h-full">
        {children}
      </body>
    </html>
  )
}
