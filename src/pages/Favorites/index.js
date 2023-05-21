import Banner from 'components/banner';
import style from './favorites.module.css'
import Title from 'components/title';
import Card from 'components/card';
import { useFavoriteContext } from 'contexts/favorites';

const Favorites = () => {

    const {favorite} = useFavoriteContext();

    return (
        <>
            <Banner image="favorite" />
            <Title>
                Meus favoritos
            </Title>
            <section className={style.list}>
                {favorite.map((video) => {
                    return <Card {...video} key={video.id} />
                }
                )}
            </section>
        </>
    )
}

export default Favorites;