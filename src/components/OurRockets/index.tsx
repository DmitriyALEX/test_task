import styles from './styles.module.css'
import SliderNavigationTemplate from '../../shared/SliderNavigationTemplate'
import CardMain from '../../shared/CardMain'

const OurRockets = () => {
    return (
        <section className={styles.our_rockets_container}>
            <h1 className={styles.our_rockets_title}>OUR ROCKETS</h1>
            {/* CARD SECTION */}
            <CardMain />

            {/* NAVIGATION SECTION */}
            <SliderNavigationTemplate />

            {/* TOTAL SECTION*/}
            <div className={styles.total_results}>
                <div className={styles.total_results_item}>
                    <strong className={styles.total_results_item_number}>43</strong>
                    <p className={styles.total_results_item_text}>TOTAL LAUNCHES</p>
                </div>
                <div className={styles.total_results_item}>
                    <strong className={styles.total_results_item_number}>46</strong>
                    <p className={styles.total_results_item_text}>VISITS TO THE ISS</p>
                </div>
                <div className={styles.total_results_item}>
                    <strong className={styles.total_results_item_number}>25</strong>
                    <p className={styles.total_results_item_text}>TOTAL REFLIGHTS</p>
                </div>
            </div>
        </section>
    )
}

export default OurRockets
