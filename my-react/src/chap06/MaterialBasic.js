/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button } from '@mui/material'

export default function MaterialBasic() {
  const font = css`
    text-transform: none;
  `
  return (
    <>
      <Button variant='text' css={font}>Text</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>
      <Button>Default</Button>
    </>
  )
}