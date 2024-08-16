import arrowLeftIcon from '../../../public/icons/arrowLeftIcon.svg'
import arrowRightIcon from '../../../public/icons/arrowRightIcon.svg'
import navCircleWhiteIcon from '../../../public/icons/navCircleWhiteIcon.svg'
import navCircleSilverIcon from '../../../public/icons/navCircleSilverIcon.svg'
import styles from './styles.module.css'

const SliderNavigationTemplate = () => {
    return (
        <div className={styles.our_rockets_navigation}>
            <img src={arrowLeftIcon} alt={'arrowLeftIcon'} />
            <div>
                <span className={styles.circle_icon}>
                    <img src={navCircleWhiteIcon} alt={'navCircleWhiteIcon'} />
                </span>
                <span className={styles.circle_icon}>
                    <img src={navCircleSilverIcon} alt={'navCircleSilverIcon'} />
                </span>
                <span className={styles.circle_icon}>
                    <img src={navCircleSilverIcon} alt={'navCircleSilverIcon'} />
                </span>
                <span className={styles.circle_icon}>
                    <img src={navCircleSilverIcon} alt={'navCircleSilverIcon'} />
                </span>
                <span className={styles.circle_icon}>
                    <img src={navCircleSilverIcon} alt={'navCircleSilverIcon'} />
                </span>
            </div>
            <img src={arrowRightIcon} alt={'arrowRightIcon'} />
        </div>
    )
}

export default SliderNavigationTemplate
