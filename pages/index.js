/* Components */
import TitleHead from '../src/components/Head';
import Header from '../src/components/Header';

export default function Home() {
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
    </>
  )
}
