import style from './common.module.css';

const Common = ({children}) => {
    return(
        <section className={style.common}>
            {children}
        </section>
    )
}

export default Common;