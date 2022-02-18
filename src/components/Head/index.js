import Head from "next/head";

export default function TitleHead({ children }) {
    return(
        <Head>
            <title>{children}</title>
        </Head>
    );
}