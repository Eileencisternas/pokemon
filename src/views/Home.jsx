import React from 'react'
import home from '../asset/img/home.png'

export default function Home() {
  return (
    <div className= "py-4 text-center"><h1>Bienvenido a Pokemon</h1>
     <img
          width="500"
          src={home}
          alt="" />
    </div>
  )
}

