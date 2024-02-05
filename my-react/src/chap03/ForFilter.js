import React from 'react'

export default function ForFilter({src}) {
  const lowPrice = src.filter((el) => el.price < 3500)

  return (
    <dl>
      {
        lowPrice.map((el) => (
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