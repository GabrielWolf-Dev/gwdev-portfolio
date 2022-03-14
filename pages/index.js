/* Components */
import TitleHead from '../src/components/Head';
import Header from '../src/components/Header';
import Banner from '../src/components/Banner';

export default function Home(props) {
  const linksHeader = [
    "Sobre",
    "Projetos",
    "Medium",
    "Blog",
    "Contato"
  ];
  
  return (
    <>
      <TitleHead>GWDev-Portfólio | Home</TitleHead>
      <Header linksMenu={linksHeader} />
      <Banner gitHubDatas={props.bannerDatas} />
    </>
  )
}

export async function getStaticProps() {
  const nameUser = "GabrielWolf-Dev";
  const url = "https://api.github.com/users/" + nameUser;
  const response = await fetch(url);
  const { name, bio, html_url, created_at, updated_at, avatar_url } = await response.json();
  const bannerDatas = {
      name,
      bio,
      html_url,
      avatar_url
  };
  const experience = { created_at, updated_at };


  return {
    props: {
      bannerDatas,
      experience
    },
  }
}