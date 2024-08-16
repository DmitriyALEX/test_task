import { useState } from 'react'
import handleSavedIcon from '../../../public/icons/handleSavedIcon.svg'
import styles from './styles.module.css'
import { ICard } from '../../types/card-interface'

const SaveToLocalstorage = ({ cardItem }: { cardItem: ICard }) => {
    const [dataCard, setDataCArd] = useState<ICard[]>([])

    const handleSaved = (cardItem: ICard) => {
        setDataCArd(prevData => [...prevData, cardItem])
        localStorage.setItem('card_item', JSON.stringify([...dataCard, cardItem]))
    }

    return (
        <div>
            <button className={styles.saved_button} onClick={() => handleSaved(cardItem)}>
                <img src={handleSavedIcon} alt={'handleSavedIcon'} />
            </button>
        </div>
    )
}

export default SaveToLocalstorage
