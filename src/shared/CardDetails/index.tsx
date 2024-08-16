import styles from './styles.module.css'
import { ICard } from '../../types/card-interface'

const CardDetails = ({ data }: { data: ICard }) => {
    const calculateVolume = (payloadVolume: number | undefined, trunkVolume: number | undefined) => {
        const payloadVol = payloadVolume || 0
        const trunkVol = trunkVolume || 0
        const totalVolumeCubicMeters = payloadVol + trunkVol
        const totalVolumeCubicFeet = convertCubicMetersToCubicFeet(totalVolumeCubicMeters)
        return { totalVolumeCubicMeters, totalVolumeCubicFeet }
    }

    const payloadVolume = data.pressurized_capsule?.payload_volume?.cubic_meters
    const trunkVolume = data.trunk?.trunk_volume?.cubic_meters

    const totalVolume = calculateVolume(payloadVolume, trunkVolume)

    function convertCubicMetersToCubicFeet(cubicMeters: number) {
        return cubicMeters * 35.3147
    }
    return (
        <section className={styles.card_details_container}>
            <div>
                <img src={data.flickr_images[0]} alt={'rocket_image'} className={styles.card_image} />
            </div>

            {/* ROCKET INFO */}
            <div className={styles.card_discription}>
                <ul className={styles.card_list}>
                    <li className={styles.card_list_title}>{data.name}</li>
                    <li className={styles.card_list_item}>
                        HEIGHT
                        <span>
                            <span>{data.height_w_trunk.meters}</span>&nbsp; /&nbsp;{' '}
                            <span>{data.height_w_trunk.feet}</span>
                        </span>
                    </li>
                    <li className={styles.card_list_item}>
                        DIAMETER
                        <span>
                            <span>{data.diameter.meters}</span>&nbsp; /&nbsp; <span>{data.diameter.feet}</span>
                        </span>
                    </li>
                    <li className={styles.card_list_item}>
                        SPACECRAFT VOLUME
                        <span>
                            <span>{totalVolume.totalVolumeCubicMeters.toFixed(1)} M³</span>
                            &nbsp; /&nbsp;
                            <span>{totalVolume.totalVolumeCubicFeet.toFixed(1)} FT³</span>
                        </span>
                    </li>
                    <li className={styles.card_list_item}>
                        TRUNK VOLUME
                        <span>
                            <span>{data.trunk.trunk_volume.cubic_meters}</span>&nbsp; /&nbsp;
                            <span>{data.trunk.trunk_volume.cubic_feet}</span>
                        </span>
                    </li>
                    <li className={styles.card_list_item}>
                        LAUNCH PAYLOAD MASS
                        <span>
                            <span>{data.launch_payload_mass.kg}</span>&nbsp; /&nbsp;{' '}
                            <span>{data.launch_payload_mass.lb}</span>
                        </span>
                    </li>
                    <li className={styles.card_list_item}>
                        TRUNK VOLUME
                        <span>
                            <span>{data.trunk.trunk_volume.cubic_meters}</span>&nbsp; /&nbsp;
                            <span>{data.trunk.trunk_volume.cubic_feet}</span>
                        </span>
                    </li>
                    <li className={styles.card_list_item}>
                        LAUNCH PAYLOAD MASS
                        <span>
                            <span>{data.launch_payload_mass.kg}</span>&nbsp; /&nbsp;{' '}
                            <span>{data.launch_payload_mass.lb}</span>
                        </span>
                    </li>
                    <li className={styles.card_list_item}>
                        RETURN PAYLOAD MASS
                        <span>
                            <span>{data.return_payload_mass.kg}</span>&nbsp; /&nbsp;{' '}
                            <span>{data.return_payload_mass.lb}</span>
                        </span>
                    </li>
                    <li className={styles.card_list_item}>
                        RETURN PAYLOAD MASS
                        <span>
                            <span>{data.return_payload_mass.kg}</span>&nbsp; /&nbsp;{' '}
                            <span>{data.return_payload_mass.lb}</span>
                        </span>
                    </li>
                    <li className={styles.card_list_item}>
                        SPACECRAFT VOLUME
                        <span>
                            <span>{totalVolume.totalVolumeCubicMeters.toFixed(1)} M³</span>&nbsp; /&nbsp;
                            <span>{totalVolume.totalVolumeCubicFeet.toFixed(1)} FT³</span>
                        </span>
                    </li>
                    <li className={styles.card_list_item}>
                        RETURN PAYLOAD MASS
                        <span>
                            <span>{data.return_payload_mass.kg}</span>&nbsp; /&nbsp;{' '}
                            <span>{data.return_payload_mass.lb}</span>
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default CardDetails
