import style from './title.module.css'

const Title = ({children}) =>{

    return(
        <div className={style.title}>
            {children}
        </div>
    )

}

export default Title;