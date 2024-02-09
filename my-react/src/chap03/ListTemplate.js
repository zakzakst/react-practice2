import React from 'react'

// export default function ListTemplate({ src, children }) {
//   return (
//     <dl>
//       {src.map((el) => (
//         <React.Fragment key={el.isbn}>
//           {children(el)}
//         </React.Fragment>
//       ))}
//     </dl>
//   )
// }

export default function ListTemplate({ src, render }) {
  return (
    <dl>
      {src.map((el) => (
        <React.Fragment key={el.isbn}>
          {render(el)}
        </React.Fragment>
      ))}
    </dl>
  )
}