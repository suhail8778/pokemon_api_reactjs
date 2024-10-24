import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import PokInfo from './components/PokInfo'
import Catch from './components/Catch'

export default function RouterDom() {
  return (
    <Routes>
    <Route exact path='/' element={<Main/>}/>
    <Route path='/pinfo' element={<PokInfo/>}/>
    <Route path='/catch' element={<Catch/>}/>
   </Routes>
  )
}
