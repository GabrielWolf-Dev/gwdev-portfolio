import { useRouter } from 'next/router';
import { getPost, getAllSlugs } from '../../cms/dato-cms';

import TitleHead from '../../src/components/Head';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import Post from '../../src/components/blog/Post';

export default function Posts(props) {
    const router = useRouter();
    if (router.isFallback) {
      return <h3>Carregando...</h3>
    }
    const linksMenu = [
      "Blog",
      "Medium",
      "Creditos"
    ];

    return (
      <>
        <TitleHead>GWDev-Portfólio | Post</TitleHead>
        <Header linksMenu={linksMenu} />
        <Post post={props.post} />
        <Footer />
      </>
    );
}

export async function getStaticPaths() {
  const slugs = await getAllSlugs();
  const paths = slugs.map(({ slugPost }) => ({
    params: {
      slug: slugPost
    }
  }));
  
  return {
      paths,
      fallback: true
  }
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const post = await getPost(slug);
  const revalidateTemp = 604800 / 86400; // 7 dias

  return {
    props: {
      post
    },
    revalidate: revalidateTemp
  };
}