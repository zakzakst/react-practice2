import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  json,
} from 'react-router-dom'
import RouterParam from './RouterParam'
import TopPage from './TopPage'
import BookPage from './BookPage'
import SearchPage from './SearchPage'
import NotFoundPage from './NotFoundPage'
import BookQueryPage from './BookQueryPage'
import BookStatePage from './BookStatePage'
import InvalidParamsPage from './InvalidParamsPage'
import WeatherPage from './WeatherPage'
import CommonErrorPage from './CommonErrorPage'

const sleep = ms => new Promise(res => setTimeout(res, ms))

const fetchWeather = async ({ params }) => {
  await sleep(2000)
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.city}`)
  if (res.ok) { return res }
  // return json({
  //   name: '不明',
  // })
  switch (res.status) {
    case 404:
      throw json({ message: 'city is invalid!!' }, { status: 404 })
    case 401:
      throw json({ message: 'api key is invalid!!' }, { status: 401 })
    default:
      throw json({ message: 'api server is in trouble...' }, { status: 501 })
  }
}

const routesParam = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<RouterParam />}
      // errorElement={<InvalidParamsPage />}
      errorElement={<CommonErrorPage />}
    >
      <Route path='/' element={<TopPage />} />
      <Route
        path='/book/:isbn?'
        element={<BookPage />}
        // errorElement={<InvalidParamsPage />}
      />
      <Route path='/search/*' element={<SearchPage />} />
      <Route path='*' element={<NotFoundPage />} />
      <Route path='/bookQuery' element={<BookQueryPage />} />
      <Route path='/bookState' element={<BookStatePage />} />
      <Route
        path='/weather/:city'
        element={<WeatherPage />}
        // loader={({ params }) =>
        //   fetch(`https://jsonplaceholder.typicode.com/todos/${params.city}`)
        // }
        loader={fetchWeather}
      />
    </Route>
  )
)

export default routesParam