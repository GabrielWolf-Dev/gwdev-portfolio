import styles from '../../../../styles/blog.module.css';
import styleFonts from '../../../../styles/fonts.module.css';

export default function Post({ post }) {
    return(
        <div className={styles["container-blog"]}>
            <main className='container'> 
                <h1
                    className={`
                        ${styleFonts["title"]}
                        ${styleFonts["text-green"]}
                        ${styleFonts["text-center"]}
                    `}
                >{post.title}</h1>
                <h2
                    className={`
                        ${styleFonts["subtitle"]}
                        ${styleFonts["text-white"]}
                        ${styleFonts["text-center"]}
                    `}
                >Página em desenvolvimento...</h2>
            </main>
        </div>
    );
}