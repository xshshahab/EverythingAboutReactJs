import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.error("ERROR :", error))
    }, [])


    return [data]
}

export default useFetch