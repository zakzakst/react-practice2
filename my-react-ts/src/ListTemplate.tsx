import React, { ReactNode } from 'react'
import type { Book } from './Book'

type ListTemplateProps = {
  src: Array<Book>
  children: (b: Book) => ReactNode
}

export default function ListTemplate({ src, children }: ListTemplateProps) {
  return (
    <dl>
      {
        src.map((el, index) => (
          <React.Fragment key={el.isbn}>
            {children(el)}
          </React.Fragment>
        ))
      }
    </dl>
  )
}