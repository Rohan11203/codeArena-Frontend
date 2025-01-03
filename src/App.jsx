import { useState } from 'react'
import './App.css'
import { AppRoute } from './routes/AppRoute'
import { StoreProvider } from './ContextAPi/store/ContextProvide'

function App() {

  return (
    <>
    <StoreProvider>
      <AppRoute />
    </StoreProvider>
    </>
  )
}

export default App
