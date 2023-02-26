import styles from './styles.module.scss'
import { CardInterface } from '@/Interfaces/card'

const Page: React.FC<CardInterface>=({titulo, descripcion, imagenUrl}) => {
    return (
        <div className={styles.sectionCardContainer}>
            <div className={styles.sectionCardContent}>
                    <div>{titulo} {imagenUrl}</div>
                    <p>{descripcion}</p>
            </div>
        </div>
    )

}


export default Page