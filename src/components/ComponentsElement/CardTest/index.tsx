import Page from './page'
import { UserInterface } from '@/Interfaces/user'
const CardTest: React.FC<UserInterface>=({name, lastName}) => {
    return (
        <Page
        name = {name}
        lastName = {lastName}
        ></Page>
    )
}


export default CardTest