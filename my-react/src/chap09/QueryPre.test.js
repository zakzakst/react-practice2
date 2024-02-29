import { render, screen } from '@testing-library/react'
import QueryPre from '../chap06/QueryPre'

describe('QueryPre', () => {
  test('fetch関数を伴うテスト', async () => {
    const { debug, baseElement } = render(<QueryPre />)
    const text = await screen.findByRole('paragraph', {}, { timeout: 3000 })
    // debug(baseElement)
    expect(text).toHaveTextContent('userId')
  })
})