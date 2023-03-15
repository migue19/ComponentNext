import styles from './styles.module.scss'

const Page=() => {
    return (
      <>
        <div className={styles.containerGrid}>

          <div className={styles.containerGridContent}>

            <div className=''>
              <p>Barra de Navegacion</p>
            </div>
            
            <div className=''>
              <p>Landing principal</p>
            </div>
            
            <div className=''>
              <p>landing secundario 1</p>
            </div>

            <div className=''>
              <p>landing terciario 1</p>
            </div>
            
            <div className=''>
              <p>section vertical</p>
            </div>

            <div className=''>
              <p>footer</p>
            </div>


          </div>
        </div>
      </>
    )

}


export default Page