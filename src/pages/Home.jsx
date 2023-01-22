import React, { useContext } from 'react'
import { useState } from 'react'
import {FormAnimal} from '../hooks/formularios/registro/relacionales/FormAnimal';
import {UserContext} from '../provider/UserContext'


const Home = () => {

  const { animales, veterinario, setveterinario} = useContext(UserContext)
  console.log( animales )
  const [cards, setcards] = useState([ 
    {src: '/vite.svg', title: 'Desayunos', text:'El desayuno puede ser recomendado o realizado al gusto, por lo general se trata de llevar uno rico en proteinas con su respectivo bebida (batidos, jugos, gelatinas, ...). '}, 
    {src: '/vite.svg', title: 'Desayunos', text:'El desayuno puede ser recomendado o realizado al gusto, por lo general se trata de llevar uno rico en proteinas con su respectivo bebida (batidos, jugos, gelatinas, ...). '}, 
    {src: '/vite.svg', title: 'Desayunos', text:'El desayuno puede ser recomendado o realizado al gusto, por lo general se trata de llevar uno rico en proteinas con su respectivo bebida (batidos, jugos, gelatinas, ...). '}  ])
  return (
    <>
      {
      }



      {/* <div className='d-flex justify-content-center'> */}
        {/* <FormAnimal /> */}
      {/* </div> */}

      {/* <div className='products-services d-flex justify-content-center'>
        {cards.map((card, index) => (
            console.log(card)
        ))}
      </div> */}
    </>
  )
}

export default Home