import { useState, useEffect } from 'react'

const useFetch = (url, token = '') => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const fetchResource = async () => {
            const config = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
            try {
                let res = await fetch(url, config)
                let data = await res.json()
                setTasks(data.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchResource()
    }, [url, token])

    return { tasks }
}
export default useFetch
