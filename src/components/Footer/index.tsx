import SliderNavigationTemplate from '../../shared/SliderNavigationTemplate'
import styles from './styles.module.css'

const Footer = () => {
    return (
        <section className={styles.footer_conteiner}>
            <div className={styles.footer_content}>
                <div className={styles.footer_image_conteiner}>
                    <img
                        src={'images/footer_slider.jpeg'}
                        alt={'footer_slider'}
                        className={styles.footer_slider_image}
                    />
                </div>
                <div className={styles.footer_slider_content}>
                    <p className={styles.footer_slider_title}>
                        {'STARSHIP'} <br /> {'CAPABILITIES'}
                    </p>
                    <p className={styles.footer_slider_discription}>
                        As the most powerful launch system ever developed, Starship will be able to carry up to 100
                        people on long-duration, interplanetary flights. Starship will also help enable satellite
                        delivery, the development of a Moon base, and point-to-point transport here on Earth
                    </p>
                    <div className={styles.footer_slider_nav_template}>
                        <SliderNavigationTemplate />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
