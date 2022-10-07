//Nombre 
//Numero de poliza
//Email
//fecha de nacimiento
import {useState} from 'react'


const UserForm = () => {    
const [name, setName] = useState('')

const [num_poliza, setNumPoliza] = useState('')

const [email, setEmail] = useState('')
const [birth_date, setBirthDate] = useState('')



const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
        name : name,
        num_poliza : num_poliza,
        email : email,
        birth_date : birth_date
    }
    console.log(data)
}
    return (
        <form>
            <label> Ingrese su nombre: </label>
            <input onChange={(e) => setName(e.target.value)} /> <br></br>
            <label > Ingrese su número de póliza: </label>
            <input onChange={ (e) => {setNumPoliza(e.target.value)}} /> <br></br>
            <label> Ingrese su email: </label>
            <input onChange={ (e) => {setEmail(e.target.value)}} ></input> <br></br>
            <label> Ingrese su fecha de nacimiento: </label>
            <input onChange={ (e) => {setBirthDate(e.target.value)}} ></input> <br></br>
            
            <button onClick={(handleSubmit)}> Enviar datos </button>
        </form>
    )

};

export default UserForm;