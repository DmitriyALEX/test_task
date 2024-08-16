import { useEffect, useState } from 'react'
import CardDetails from '../../shared/CardDetails'
import { ICard } from '../../types/card-interface'
import styles from './styles.module.css'

const SavedPage = () => {
    const [renderedSavedData, setRenderedSavedData] = useState<ICard[]>([])

    useEffect(() => {
        const savedData = localStorage.getItem('card_item')
        if (savedData) {
            setRenderedSavedData(JSON.parse(savedData) || [])
        }
    }, [])

    const handleDelete = () => {
        localStorage.removeItem('card_item')
        setRenderedSavedData([])
    }

    return (
        <div className={styles.saved_container}>
            {renderedSavedData.length > 0 ? (
                <>
                    {renderedSavedData.map(data => (
                        <CardDetails data={data} />
                    ))}
                    <div className={styles.delete_button_container}>
                        <button className={styles.delete_button} onClick={handleDelete}>
                            DELETE
                        </button>
                    </div>
                </>
            ) : (
                <div className={styles.no_item_container}>NO ITEMS</div>
            )}
        </div>
    )
}

export default SavedPage
