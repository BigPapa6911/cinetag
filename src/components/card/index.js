import { useFavoriteContext } from 'contexts/favorites'
import style from './card.module.css'
import toFavorite from './favorite_outline.png'
import toDesfavorite from './favorite.png'
import { Link } from 'react-router-dom'

const Card = ({ id, title, wallpaper }) => {

    const { favorite, addFavorite } = useFavoriteContext();
    const isFavorite = favorite.some((fav) => fav.id === id);
    const icon = isFavorite ? toDesfavorite : toFavorite;

    return (
        <div className={style.card} id={id} >
            <Link className={style.link} to={`/video/${id}`}>
                <img src={wallpaper} alt={title} className={style.wallpaper} />
                <h2 className={style.title}>{title}</h2>
            </Link>
            <img src={icon}
                alt='set movie as favorite'
                className={style.favorite}
                onClick={() => {
                    addFavorite({ id, title, wallpaper })
                }}
            />
        </div>
    )

}

export default Card;