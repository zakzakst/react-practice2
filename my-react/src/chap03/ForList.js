import React from 'react'

// 書籍情報はProps（src）経由で受け取る
export default function ForList({ src }) {
  return (
    // 書籍情報（src属性）を<dt>/<dd>リストに整形
    <dl>
      {
        src.map((el) => (
          <>
            <dt>
              <a href={`https://wings.msn.to/books/${el.isbn}/${el.isbn}.jpg`}>
                {el.title}（{el.price}）円
              </a>
            </dt>
            <dd>{el.summary}</dd>
          </>
        ))
      }
    </dl>
  )
}