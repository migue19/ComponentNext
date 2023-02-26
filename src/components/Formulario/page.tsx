import { useState } from "react"

const Page=() => {
    const [user, setUser] = useState("")

    const subir=(event:any)=>{
        console.log('Probando funcionamiento')
        event.preventDefault()
    }
    return (
        <>
            <form onSubmit={(e)=>subir(e)}>
                <label>
                    Usuario: 
                    <input type="text" name="usuario" value={user} onChange={(e)=>setUser(e.target.value)}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    )

}


export default Page