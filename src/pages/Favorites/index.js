import Banner from 'components/banner';
import style from './favorites.module.css'
import Title from 'components/title';
import Card from 'components/card';
import { useFavoriteContext } from 'contexts/favorites';

const Favorites = () => {

    const {favorite} = useFavoriteContext();

    const favoritesArray = Array.isArray(favorite) ? favorite : Object.values(favorite);


    return (
        <>
            <Banner image="favorite" />
            <Title>
                <h1>Meus favoritos</h1>
            </Title>
            <section className={style.list}>
                {favoritesArray.map((video) => {
                    return <Card {...video} key={video.id} />
                }
                )}
            </section>
        </>
    )
}

export default Favorites;