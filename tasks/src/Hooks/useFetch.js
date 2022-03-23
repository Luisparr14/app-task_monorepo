import { useState, useEffect } from 'react'
import axios from 'axios'
const useFetch = (url, token = '') => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchResource = async () => {
      const config = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      try {
        const res = await axios.get(url, config)
        setTasks(res.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchResource()
  }, [url, token])

  return { tasks }
}
export default useFetch
