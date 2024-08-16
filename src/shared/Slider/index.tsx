import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { ICard } from '../../types/card-interface'
import styles from './styles.module.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { useSwiper } from 'swiper/react'
import arrowLeftIcon from '../../../public/icons/arrowLeftIcon.svg'
import arrowRightIcon from '../../../public/icons/arrowRightIcon.svg'

const Slider = ({ data }: { data: ICard }) => {
    const swiper = useSwiper()
    return (
        <div className={styles.slider_container}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                scrollbar={{ draggable: false }}
                navigation={{
                    nextEl: `.${styles.next_el}`,
                    prevEl: `.${styles.prev_el}`,
                }}
                pagination={{
                    el: '#containerForBullets',
                    type: 'bullets',
                    bulletClass: `${styles.swiper_custom_bullet}`,
                    bulletActiveClass: `${styles.swiper_custom_bullet_active}`,
                    clickable: false,
                }}
                allowTouchMove={false}
            >
                <>
                    {data.flickr_images &&
                        data.flickr_images.map(image => (
                            <SwiperSlide>
                                <div key={image} className={styles.content}>
                                    <img src={image} alt={'image'} className={styles.slider_image} />
                                    <div className={styles.content_text}>
                                        <p className={styles.content_text_title}>
                                            {'STARSHIP'} <br /> {'CAPABILITIES'}
                                        </p>
                                        <p className={styles.content_text_discription}>
                                            As the most powerful launch system ever developed, Starship will be able to
                                            carry up to 100 people on long-duration, interplanetary flights. Starship
                                            will also help enable satellite delivery, the development of a Moon base,
                                            and point-to-point transport here on Earth.
                                        </p>
                                    </div>
                                    <div className={styles.navigation_container}>
                                        <button onClick={() => swiper.slidePrev()} className={styles.next_el}>
                                            <img src={arrowRightIcon} alt={'arrowRightIcon'} />
                                        </button>
                                        {/* TODO: pagination */}
                                        <div id="containerForBullets" className={styles.swiper_pagination}>
                                            {/* {arrowLeftIcon()} */}
                                        </div>
                                        <button onClick={() => swiper.slideNext()} className={styles.prev_el}>
                                            <img src={arrowLeftIcon} alt={'arrowLeftIcon'} />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                </>
            </Swiper>
        </div>
    )
}

export default Slider
