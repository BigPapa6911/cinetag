import style from './banner.module.css'

const Banner = ({image}) => {

    return (
        <div className={style.banner} 
        style={{backgroundImage: `url('/assets/images/banner-${image}.png')`}}>

        </div>
    )

}

export default Banner