import Banner from "components/banner";
import Title from "components/title";
import list from 'json/db.json';
import Card from "components/card";
import style from "./home.module.css";

const Home = () => {
    return (
        <>
            <Banner image='home'/>
            <Title >
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Title>
            <section className={style.list}>
                {list.map((video) => {
                 return <Card {...video} key={video.id}/>
                }
                )}
            </section>
        </>
    )
}

export default Home;