import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Landingpage from './pages/Landing';
import Auth from './pages/Auth';
import VerifyEmail from './components/auth/VerifyEmail';
import RequireSignup from './components/auth/RequireSignup';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Navbar/>}>
        <Route path='/' element={<Landingpage/>} />
        <Route path='auth'>
          <Route index element={<Auth/>} />
          <Route element={<RequireSignup/>}>
           <Route path='verify-email' element={<VerifyEmail/>} />
          </Route>
        </Route>
      </Route>
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
