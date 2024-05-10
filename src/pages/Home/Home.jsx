import Footer from "../../components/Footer/Footer";
import Article from "../../components/Footer/Article/Article";

export default function Home() {


    return (

<>
<h1>Domovská stránka</h1>
<p>Tady je doma</p>

<Article heading="Po mesíci hodina WAP" desc="Hodina zase v patek" content="Lorem" author="Zachiel" />
<Article heading="Po mesíci hodina WAP" desc="Hodina zase v patek" content="Lorem" author="Rachiel" />
<Article heading="Po mesíci hodina WAP" desc="Hodina zase v patek" content="Lorem" author="Dachiel" />
<Footer />
</>
    )
}