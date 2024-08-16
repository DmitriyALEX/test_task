import styles from './styles.module.css'
import { useCards } from '../../hooks/useCards'
import { Link } from 'react-router-dom'
import SaveToLocalstorage from '../SaveToLocalstorage'

const CardMain = () => {
    const { data } = useCards()

    const convertCubicMetersToCubicFeet = (cubicMeters: number) => {
        return cubicMeters * 35.3147
    }

    const calculateVolume = (payloadVolume: number | undefined, trunkVolume: number | undefined) => {
        const payloadVol = payloadVolume || 0
        const trunkVol = trunkVolume || 0
        const totalVolumeCubicMeters = payloadVol + trunkVol
        const totalVolumeCubicFeet = convertCubicMetersToCubicFeet(totalVolumeCubicMeters)
        return { totalVolumeCubicMeters, totalVolumeCubicFeet }
    }

    return (
        <section className={styles.card_main_container}>
            <div className={styles.card_container}>
                {data?.map(card => {
                    const payloadVolume = card.pressurized_capsule?.payload_volume?.cubic_meters
                    const trunkVolume = card.trunk?.trunk_volume?.cubic_meters

                    const totalVolume = calculateVolume(payloadVolume, trunkVolume)

                    return (
                        <section style={{ display: 'flex', flexDirection: 'column' }}>
                            <Link to={`/${card.id}`}>
                                <div key={card.id} className={styles.our_rockets_card}>
                                    <div className={styles.our_rockets_card_image}>
                                        <img
                                            src={card.flickr_images[0]}
                                            alt={'rocket_image'}
                                            className={styles.our_rockets_card_image}
                                        />
                                    </div>
                                    <div className={styles.our_rockets_card_discription}>
                                        <ul className={styles.our_rockets_card_list}>
                                            <li className={styles.card_list_title}>{card.name}</li>
                                            <li className={styles.card_list_item}>
                                                HEIGHT
                                                <span>
                                                    <span>{card.height_w_trunk.meters}</span>
                                                    &nbsp; /&nbsp;
                                                    <span>{card.height_w_trunk.feet}</span>
                                                </span>
                                            </li>
                                            <li className={styles.card_list_item}>
                                                DIAMETER
                                                <span>
                                                    <span>{card.diameter.meters}</span>
                                                    &nbsp; /&nbsp;
                                                    <span>{card.diameter.feet}</span>
                                                </span>
                                            </li>
                                            <li className={styles.card_list_item}>
                                                SPACECRAFT VOLUME
                                                <span>
                                                    <span>{totalVolume.totalVolumeCubicMeters.toFixed(1)} M³</span>
                                                    &nbsp;/&nbsp;
                                                    <span>{totalVolume.totalVolumeCubicFeet.toFixed(1)} FT³</span>
                                                </span>
                                            </li>
                                            <li className={styles.card_list_item}>
                                                TRUNK VOLUME
                                                <span>
                                                    <span>{card.trunk.trunk_volume.cubic_meters}</span>
                                                    &nbsp; /&nbsp;
                                                    <span>{card.trunk.trunk_volume.cubic_feet}</span>
                                                </span>
                                            </li>
                                            <li className={styles.card_list_item}>
                                                LAUNCH PAYLOAD MASS
                                                <span>
                                                    <span>{card.launch_payload_mass.kg}</span>
                                                    &nbsp; /&nbsp;
                                                    <span>{card.launch_payload_mass.lb}</span>
                                                </span>
                                            </li>
                                            <li className={styles.card_list_item}>
                                                RETURN PAYLOAD MASS
                                                <span>
                                                    <span>{card.return_payload_mass.kg}</span>
                                                    &nbsp; /&nbsp;
                                                    <span>{card.return_payload_mass.lb}</span>
                                                </span>
                                            </li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                            <div className={styles.card_saved_item}>
                                <SaveToLocalstorage cardItem={card} />
                            </div>
                            <div />
                        </section>
                    )
                })}
            </div>
        </section>
    )
}

export default CardMain
