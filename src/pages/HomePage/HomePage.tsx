import styles from './styles.module.css'
import OurRockets from '../../components/OurRockets'
import AboutUs from '../../components/AboutUs'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Header from '../../components/Header'

const HomePage = ({ isHomePage }: { isHomePage?: boolean }) => {
    return (
        <section className={styles.main_container}>
            <section className={styles.main_content_container}>
                <div className={styles.main_content_hero}>
                    {isHomePage && <Header />}
                    <Hero />
                </div>
                <OurRockets />
                <AboutUs />
            </section>
            <Footer />
        </section>
    )
}

export default HomePage
