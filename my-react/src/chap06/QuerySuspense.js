import { useQuery } from 'react-query'

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const fetchTodos = async () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1'
  await sleep(2000)
  const res = await fetch(apiUrl)
  if (res.ok) { return res.json() }
  throw new Error(res.statusText)
}

export default function QuerySuspense() {
  const { data } = useQuery('todos', fetchTodos)

  return (
    <p>{ JSON.stringify(data) }</p>
  )
}