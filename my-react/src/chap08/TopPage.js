import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

export default function TopPage() {
  const [, setCount] = useOutletContext()
  useEffect(() => setCount((c) => c + 1), [setCount])
  return <p>トップページです。</p>
}