import { FC } from "react"
import Head from "next/head"
import { Navbar } from "../ui";

type Props = {
  title: string;
  children?: React.ReactNode;
};

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props>= ({ children, title }) => {

  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Cesar Torres" />
        <meta name="description" content={`Información sobre los pokemons ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        {/* SEO  */}
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es una pagina de información sobre los pokemons ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main style={{
        padding: '0px 20px'
      }}>
        {children}
      </main>
    </>
  )
}
