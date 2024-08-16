import arrowLeftIcon from '../../../public/icons/arrowLeftIcon.svg'
import arrowRightIcon from '../../../public/icons/arrowRightIcon.svg'

import { useSwiper } from 'swiper/react'
import styles from './styles.module.css'

const SwiperButton = () => {
    const swiper = useSwiper()

    return (
        <div className={styles.navigation_container}>
            <button onClick={() => swiper.slidePrev()} className={styles.next_el}>
                <img src={arrowRightIcon} alt={'arrowRightIcon'} />
            </button>
            <div className={styles.swiper_pagination}>ыыы</div>
            <button onClick={() => swiper.slideNext()} className={styles.prev_el}>
                <img src={arrowLeftIcon} alt={'arrowLeftIcon'} />
            </button>
        </div>
    )
}

export default SwiperButton
