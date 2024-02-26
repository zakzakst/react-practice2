import { useLoaderData } from 'react-router-dom'

export default function WeatherPage() {
  const data = useLoaderData()
  return (
    <div>{JSON.stringify(data)}</div>
  )
}