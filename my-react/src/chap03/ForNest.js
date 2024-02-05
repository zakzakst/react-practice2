import ForItem from './ForItem'

export default function ForNest({src}) {
  console.log(ForItem, src)
  return (
    <dl>
      {
        src.map((el) =>
          <ForItem book={el} key={el.isbn} />
        )
      }
    </dl>
  )
}