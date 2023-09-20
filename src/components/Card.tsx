import { useEffect, useState } from "react"

const Card = () => {

    const [personName, setPersonName] = useState()

    useEffect(() => {
        const fetchPerson = async () => {
            const response = await fetch("https://swapi.dev/api/people/1")
            const data = await response.json();
            console.log(data)
            setPersonName(data.name)
        }
        fetchPerson()
    }, [])

    return (
        <>{personName}</>
    )
}

export default Card