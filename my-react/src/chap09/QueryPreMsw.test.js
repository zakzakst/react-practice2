import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import QueryPre from '../chap06/QueryPre'

describe('QueryPre (Mock)', () => {
  const server = setupServer(
    rest.get('https://jsonplaceholder.typicode.com/todos/1',
      async (req, res, context) =>
        res(
          context.status(200),
          context.json({
            test: {
              userId: 1,
              id: 1,
              title: 'delectus aut autem',
              completed: false,
            }
          })
        )
    )
  )

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('モックを利用したテスト', async () => {
    const {debug, baseElement} = await render(<QueryPre />)
    const text = await screen.findByRole('paragraph', {}, { timeout: 3000 })
    debug(baseElement)
    expect(text).toHaveTextContent('Loading...')
  })
})