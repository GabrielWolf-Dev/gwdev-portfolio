/* Components */
import Header from "../src/components/Header";

export default function Creditos(){
    const linksHeader = [
        "Creditos",
        "Blog",
        "Medium"
    ];

    return(
        <>
            <Header linksMenu={linksHeader} />
            Creditos
        </>
    );
}