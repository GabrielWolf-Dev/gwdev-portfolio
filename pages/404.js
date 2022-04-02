import { Player } from '@lottiefiles/react-lottie-player';

/* Components & Styles */
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Link from '../src/components/Link';
import styleFonts from '../styles/fonts.module.css';

export default function Page404(){
    const linksMenu = [
        "Blog",
        "Medium",
        "Creditos"
    ];

    return(
        <>
            <Header linksMenu={linksMenu} />
            <section className='container'>
                <h1
                    className={`
                        ${styleFonts["title"]}
                        ${styleFonts["text-green"]}
                        ${styleFonts["text-center"]}
                    `}
                >
                    Essa página não existe :(
                </h1>

                <Player
                    autoplay
                    loop
                    src="https://assets7.lottiefiles.com/packages/lf20_njvemniu.json"
                    style={{
                        width: '100%',
                        borderRadius: "12px",
                        margin: "48px auto"
                    }}
                />

                <Link
                    className="link-home"
                    href="/"
                >Voltar para a Home</Link>
            </section>
            <Footer />
        </>
    );
}