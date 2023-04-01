import styles from './styles.module.scss'
import { UserInterface } from '@/Interfaces/user'

const Page: React.FC<UserInterface>=({name, lastName}) => {
    return (
        <div>
            <p>{name}</p>
            <p>{lastName}</p>
        </div>
    )
}


export default Page