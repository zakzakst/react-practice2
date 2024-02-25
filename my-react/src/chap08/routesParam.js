import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import RouterParam from './RouterParam'
import TopPage from './TopPage'
import BookPage from './BookPage'
import SearchPage from './SearchPage'
import NotFoundPage from './NotFoundPage'
import BookQueryPage from './BookQueryPage'

const routesParam = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterParam />}>
      <Route path='/' element={<TopPage />} />
      <Route path='/book/:isbn?' element={<BookPage />} />
      <Route path='/search/*' element={<SearchPage />} />
      <Route path='*' element={<NotFoundPage />} />
      <Route path='/bookQuery' element={<BookQueryPage />} />
    </Route>
  )
)

export default routesParam