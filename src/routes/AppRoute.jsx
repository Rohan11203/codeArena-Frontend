import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Dashboard } from '../pages/Dashboard'
import { useStore } from '../ContextAPi/store/ContextProvide'
import PlayeGround from '../pages/PlayGround'
import { PuzzleGame } from '../components/Puzzles'

const PrivateRoutes = () => {
  const { isAuth } = useStore(); 
  return (
    <>
      {isAuth ? <Outlet /> : <Navigate to="/login"/>}
    </>
  );
}

const RestrictedRoutes = () =>{
  const { isAuth } = useStore();
  
  return <>{!isAuth ? <Outlet /> : <Navigate to='/dashboard' />}</>
}

export const AppRoute = () => {

  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route element={<PrivateRoutes />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/editor' element={<PlayeGround />} />
        <Route path='/puzzle' element={<PuzzleGame />} />
      </Route>

      <Route element={<RestrictedRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Route>
    </Routes>
    </BrowserRouter>
  )
}