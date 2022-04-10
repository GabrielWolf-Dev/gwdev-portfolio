import { getMainIconTechs, getBasicIconTechs, getMainProjects } from '../cms/dato-cms';

/* Components */
import TitleHead from '../src/components/Head';
import Header from '../src/components/Header';
import Banner from '../src/components/home/Banner';
import About from '../src/components/home/About';
import Skills from '../src/components/home/Skills';
import LastAct from '../src/components/home/LastAct';
import MainProjects from '../src/components/home/MainProjets';
import Contact from '../src/components/home/Contact';
import Footer from '../src/components/Footer';

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
      <About />
      <Skills
        experience={props.experience}
        mainTechIcons={props.mainTechIcons}
        basicTechIcons={props.basicTechIcons}
      />
      <LastAct gitActs={props.gitActs} />
      <MainProjects mainProjects={props.mainProjects} />
      <Contact />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const nameUser = "GabrielWolf-Dev";
  const url = "https://api.github.com/users/" + nameUser;
  const resGitDatas = await fetch(url);
  const { login, bio, html_url, created_at, updated_at, avatar_url } = await resGitDatas.json();
  const bannerDatas = {
      name: login,
      bio,
      html_url,
      avatar_url
  };
  const experience = { created_at, updated_at };
  const mainTechIcons = await getMainIconTechs();
  const basicTechIcons = await getBasicIconTechs();
  const mainProjects = await getMainProjects();
  const resGitActs = await fetch(`${url}/repos?sort=updated_at`);
  const gitActsData = await resGitActs.json();
  const gitActs = [];
  gitActsData.forEach((act, index) => {
    const date = new Date(act.created_at);
    const day = date.getDate().toPrecision();
    const month = (date.getMonth() + 1);
    const year = date.getFullYear();

    if(index < 4) {
      return gitActs.push({
        id: act.id,
        repo_url: act.html_url,
        clone_url: act.clone_url,
        name: act.name,
        desc: act.description,
        tech: act.language,
        created_at: `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`
      });
    }
  });
  const revalidateTemp = 604800 / 86400; // 7 days
  
  return {
    props: {
      bannerDatas,
      experience,
      mainTechIcons,
      basicTechIcons,
      gitActs,
      mainProjects
    },
    revalidate: revalidateTemp
  }
}