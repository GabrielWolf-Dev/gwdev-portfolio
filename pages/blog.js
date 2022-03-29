import { getListPosts } from '../cms/dato-cms';

/* Components */
import Header from "../src/components/Header";
import Footer from '../src/components/Footer';
import Link from '../src/components/Link';

export default function Blog(props){
    const linksHeader = [
        "Blog",
        "Medium",
        "Creditos"
    ];

    return(
        <>
            <Header linksMenu={linksHeader} />
            {
                props.postsList.map(post => (
                    <div key={post.id}>
                        <Link passHref href={`/posts/${post.slugPost}`}>{post.title}</Link>
                        <img src={post.imgPost.url} alt={post.imgPost.alt} />
                    </div>
                ))
            }
            <Footer />
        </>
    );
}

export async function getStaticProps() {
    const postsList = await getListPosts();
    const revalidateTemp = 604800 / 86400; // 7 dias

    return {
        props: {
            postsList
        },
        revalidate: revalidateTemp
    }
}