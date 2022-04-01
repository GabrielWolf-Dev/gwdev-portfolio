import Head from 'next/head';
import ProgressBar from "nextjs-progressbar";

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <> 
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta name="title" content="GabrielWolf-Dev Portfólio" />
        <meta name="description" content="Saiba mais sobre minha carreira profissional, tecnologias, interesses futuros, próximos passos e adquira conhecimento nas experiências compartilhadas no Blog do site!" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gwdev-portfolio.vercel.app/" />
        <meta property="og:title" content="GabrielWolf-Dev Portfólio" />
        <meta property="og:description" content="Saiba mais sobre minha carreira profissional, tecnologias, interesses futuros, próximos passos e adquira conhecimento nas experiências compartilhadas no Blog do site!" />
        <meta property="og:image" content="https://raw.githubusercontent.com/GabrielWolf-Dev/gwdev-portfolio/main/public/imgs/seo-img.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gwdev-portfolio.vercel.app/" />
        <meta property="twitter:title" content="GabrielWolf-Dev Portfólio" />
        <meta property="twitter:description" content="Saiba mais sobre minha carreira profissional, tecnologias, interesses futuros, próximos passos e adquira conhecimento nas experiências compartilhadas no Blog do site!" />
        <meta property="twitter:image" content="https://raw.githubusercontent.com/GabrielWolf-Dev/gwdev-portfolio/main/public/imgs/seo-img.png" />
      </Head>
      <ProgressBar
        color={"#00ADB5"}
        startPosition={0.5}
        stopDelayMs={200}
        height={5}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
