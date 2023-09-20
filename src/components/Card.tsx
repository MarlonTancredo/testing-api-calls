import React from 'react';
import useFetchPersonName from "./useFetchPerson"

const Card = () => {
    const personName = useFetchPersonName("https://swapi.dev/api/people/1")

    if (!personName) {
        return <>Fetching...</>;
    }

    return (<>Name: {personName}</>)
}

export default Card