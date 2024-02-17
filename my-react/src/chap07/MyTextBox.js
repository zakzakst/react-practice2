// import { forwardRef } from 'react'

// const MyTextBox = forwardRef(({ label }, ref) => (
//   <label>
//     {label}:
//     <input type='text' size='15' ref={ref} />
//   </label>
// ))

// export default MyTextBox

import { forwardRef, useImperativeHandle, useRef } from 'react'

const MyTextBox = forwardRef(({ label }, ref) => {
  const input = useRef(null)

  useImperativeHandle(ref, () => {
    return {
      focus() {
        input.current.focus()
      },
    }
  }, [])

  return (
    <label>
      {label}:
      <input type='text' size='15' ref={input} />
    </label>
  )
})

export default MyTextBox