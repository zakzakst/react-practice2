import { useParams } from 'react-router-dom'

export default function BookPage() {
  // const params = useParams()
  // return <p>ISBNコード「{params.isbn}」のページです。</p>
  const { isbn } = useParams()
  return <p>ISBNコード「{isbn}」のページです。</p>
}