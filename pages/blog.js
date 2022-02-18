/* Components */
import Header from "../src/components/Header";

export default function Blog(){
    const linksHeader = [
        "Blog",
        "Medium",
        "Creditos"
    ];

    return(
        <>
            <Header linksMenu={linksHeader} />
        </>
    );
}