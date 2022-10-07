
import Character from './Characters/Character';

import { useEffect } from 'react';
import { useState } from 'react';


const Characters = () => {
    
    const [data, setData] = useState({})
    const [httpError, setHttpError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    // async await
    useEffect(()=> {
        const fecthCharacters = async()=> {
            const response = await fetch('https://swapi.dev/api/people')

            if(!response.ok){
                throw new Error('Something went wrong')
            }
            const responseJSON = await response.json();
            setData(responseJSON)
            
            setIsLoading(false);

        }
        try{
            fecthCharacters();
        }catch(e){
            setIsLoading(false)
            setHttpError(e.message)
        }
        fecthCharacters()

    },[])

    if(isLoading){
        return <section><p>Loading...</p></section>
    }
    if(httpError){
        return <section><p>Error: {httpError}</p></section>
    }
    

    return (
        <div> 
            Este es un componente para pruebas con un JSON
            <ul>
                {data['results'].map(character => <Character item={character} key={character.name}></Character>)}
            </ul>
        </div>
    )
}

export default Characters