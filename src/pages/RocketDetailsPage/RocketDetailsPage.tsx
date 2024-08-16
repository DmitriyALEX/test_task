import styles from './styles.module.css'
import { useParams } from 'react-router-dom'
import { useCard } from '../../hooks/useCardById'
import CardDetails from '../../shared/CardDetails'
import Slider from '../../shared/Slider'

const RocketDetailsPage = () => {
    const { id } = useParams<{ id: string }>()
    const { data, isLoading, error } = useCard(id!)

    if (isLoading) return <div>Loading...</div>
    if (error) {
        console.log(error)
    }

    return (
        <section className={styles.rocket_details_conteiner}>
            <div>
                <h1 className={styles.rocket_details_title}>{data?.name}</h1>
                {data && <CardDetails data={data} />}

                {data && <Slider data={data} />}
            </div>
        </section>
    )
}

export default RocketDetailsPage
