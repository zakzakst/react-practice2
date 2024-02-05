import React from 'react'

export default function ForSort({src}) {
  const sortedList = [...src].sort((m, n) => m.price - n.price)

  return (
    <dl>
      {
        sortedList.map((el) => (
          <React.Fragment key={el.isbn}>
            <dt>
              <a href={`https://wings.msn.to/books/${el.isbn}/${el.isbn}.jpg`}>
                {el.title}（{el.price}）円
              </a>
            </dt>
            <dd>{el.summary}</dd>
          </React.Fragment>
        ))
      }
    </dl>
  )
}