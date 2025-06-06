import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Dashboard } from '../pages/Dashboard'
import { useStore } from '../ContextAPi/store/ContextProvide'
import PlayeGround from '../pages/PlayGround'
import { SinglePlayersCard } from '../pages/SinglePlayersCards'
import ClashOfCode from '../pages/Multiplayer'
import WaitingRoom from '../components/WaitingRoom'
import FlexBoxArena from '../singlePlayerGames/FlexBoxArena'
import LandingPage from '../pages/LandingPage'
import GridBoxArena from '../singlePlayerGames/GridBoxArena'
import Leaderboard from '../pages/LeaderBoard'
import CodeSimonSays from '../singlePlayerGames/CodeSimonSays'
import QuizArena from '../singlePlayerGames/QuizArena'
import ProfileSection from '../pages/ProfileSection'

const PrivateRoutes = () => {
  const isAuth  = localStorage.getItem("isAuth")
  return (
    <>
      {isAuth === "true" ? <Outlet /> : <Navigate to="/login"/>}
    </>
  );
}

const RestrictedRoutes = () =>{
  const isAuth = localStorage.getItem("isAuth");  
  
  return <>{isAuth === "false" ? <Outlet /> : <Navigate to='/dashboard' />}</>
}

export const AppRoute = () => {

  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path='/leaderboard' element={<Leaderboard />} />


      <Route element={<PrivateRoutes />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/clashofcode/:id' element={<PlayeGround />} />
        <Route path='/singleplayer' element={<SinglePlayersCard />} />
        <Route path='/multiplayer' element={<ClashOfCode  />} />
        <Route path='/flexBox' element={<FlexBoxArena />} />
        <Route path='/gridBox' element={<GridBoxArena />} />
        <Route path='/codeSimon' element={ <CodeSimonSays /> } />
        <Route path='/quizarena' element={ <QuizArena /> } />
        <Route path='/clashofcode1/:id' element={<WaitingRoom />} />
        <Route path='/profile' element={<ProfileSection />} />
      </Route>

      <Route element={<RestrictedRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}