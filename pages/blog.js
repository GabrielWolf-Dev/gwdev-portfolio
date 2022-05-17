import { getListPosts } from '../cms/dato-cms';

/* Components */
import TitleHead from '../src/components/Head';
import Header from "../src/components/Header";
import Footer from '../src/components/Footer';
import Banner from '../src/components/blog/Banner';

export default function Blog(props){
    const linksHeader = [
        "Blog",
        "Medium",
        "Creditos"
    ];

    return(
        <>
            <TitleHead>GWDev-Portfólio | Blog</TitleHead>
            <Header linksMenu={linksHeader} />
            <Banner postsList={props.postsList} />
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