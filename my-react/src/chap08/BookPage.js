import { useParams } from 'react-router-dom'

export default function BookPage() {
  // const params = useParams()
  // return <p>ISBNコード「{params.isbn}」のページです。</p>
  // const { isbn } = useParams()
  const { isbn = '978-4-8156-0182-9' } = useParams()
  return <p>ISBNコード「{isbn}」のページです。</p>
}