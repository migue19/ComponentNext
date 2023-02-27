import styles from './styles.module.scss'
import CardComponent from '../ComponentsElement/CardComponent'
import { CardInterface } from '@/Interfaces/card'

let servicio1: CardInterface

const Page=() => {
    return (
        <div className={styles.sectionService}>
            <div className={styles.sectionServiceContent}>
                <div>
                    <h2>Nuestros Servicios</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perferendis voluptate fugit id, quas, excepturi iste vitae totam alias velit molestiae! Rem est quia officia iure impedit dolorum officiis eveniet?</p>
                </div>
                <div className={styles.containerCards}>
                    <CardComponent 
                    titulo='Full Customizable' 
                    descripcion='Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perferendis voluptate fugit id, quas,' 
                    imagenUrl='bi bi-bag'></CardComponent>

                    <CardComponent 
                    titulo='High Quality Design' 
                    descripcion='Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perferendis voluptate fugit id, quas,' 
                    imagenUrl='bi bi-bookmark-star'></CardComponent>
                    
                    <CardComponent 
                    titulo='Security' 
                    descripcion='Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perferendis voluptate fugit id, quas,' 
                    imagenUrl='bi bi-shield-check'></CardComponent>

                </div>
                
            </div>
        </div>
    )

}


export default Page