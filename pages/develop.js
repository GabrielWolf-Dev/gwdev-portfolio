import { Player } from '@lottiefiles/react-lottie-player';

/* Components & Styles */
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Link from '../src/components/Link';
import styleFonts from '../styles/fonts.module.css';

export default function PageDevelopment() {
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
                    Está página está em desenvolvimento 🛠️
                </h1>

                <Player
                    autoplay
                    loop
                    src="https://assets6.lottiefiles.com/packages/lf20_1cyaglml.json"
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