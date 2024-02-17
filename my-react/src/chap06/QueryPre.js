import { useEffect, useState } from 'react'

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const fetchData = async () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1'
  await sleep(2000)
  const res = await fetch(apiUrl)
  if (res.ok) { return res.json() }
  throw new Error(res.statusText)
}

export default function QueryPre() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    fetchData()
      .then((result) => setData(result))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <p>{ JSON.stringify(data) }</p>
  )
}