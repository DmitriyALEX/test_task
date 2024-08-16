import styles from './styles.module.css'
import vectorWorldIcon from '../../../public/icons/vectorWorldIcon.svg'
import Header from '../Header'

const Hero = () => {
    return (
        <section className={styles.hero_content_container}>
            <Header />
            <div className={styles.hero_content}>
                <h1 className={styles.hero_content_title}>
                    DIVE DEEP <br /> IN TO THE <br /> FUTURE
                </h1>
                <div className={styles.hero_content_image_container}>
                    <img src={'images/rocket.gif'} alt={'rocket'} className={styles.hero_content_image} />
                </div>
            </div>
            <div className={styles.hero_content_underline}>
                <img src={vectorWorldIcon} alt={'world_icon'} />
                <div className={styles.hero_content_underline_line}></div>
            </div>
        </section>
    )
}

export default Hero
