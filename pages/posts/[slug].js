import { useRouter } from 'next/router';
import { getPost, getAllSlugs } from '../../cms/dato-cms';

export default function Posts(props) {
    const router = useRouter();
    if (router.isFallback) {
      return <h3>Carregando...</h3>
    }

    return(
        <div>
          <h1>Post</h1>
          <h2>{props.post.title}</h2>
          <img src={props.post.imgPost.url} alt={props.post.imgPost.alt} />
          <p>{props.post.content1}</p>
          <img src={props.post.imgSecondary.url} alt={props.post.imgSecondary.alt} />
          <p>{props.post.content2}</p>
        </div>
        
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