import style from "./notFound.module.css";

const NotFound = () => {


    return(
        <section className={style.notFound}>
            <h2>Error 404!!</h2>
            <p>Página não encontrada!!</p>
        </section>
    )

}

export default NotFound;