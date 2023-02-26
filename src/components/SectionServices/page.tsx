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
                    <CardComponent titulo='diseño' descripcion='descripcion' imagenUrl='pruebaIcon'></CardComponent>
                    <CardComponent titulo='diseño' descripcion='descripcion' imagenUrl='pruebaIcon'></CardComponent>
                    <CardComponent titulo='diseño' descripcion='descripcion' imagenUrl='pruebaIcon'></CardComponent>
                </div>
                
            </div>
        </div>
    )

}


export default Page