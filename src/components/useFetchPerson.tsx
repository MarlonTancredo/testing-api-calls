import { useEffect, useState } from "react"

const useFetchPersonName = (url: string) => {

    const [personName, setPersonName] = useState<string | null>(null)

    useEffect(() => {
        const fetchPerson = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setPersonName(data.name)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPerson()
    }, [url])

    return personName
}

export default useFetchPersonName