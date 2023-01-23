import React, { useContext } from 'react'
import { useState } from 'react'
import CardH from '../components/CardH';
import {FormAnimal} from '../hooks/formularios/registro/relacionales/FormAnimal';
import {UserContext} from '../provider/UserContext'


const Home = () => {

  const { animales, razas, alimentos, vitalidades, granjas, potreros} = useContext(UserContext)
  console.log( animales, razas, alimentos, vitalidades, granjas, potreros )
 
  return (
    <>
      {
      }

  <div className='d-flex'>
      <div className='content-cards  me-5 d-flex flex-wrap justify-content-around'>
            <CardH title={'ANIMALES'} description={`El total de registros es de ${animales.length}`} />
      </div>

      <div className='content-cards me-5 d-flex flex-wrap justify-content-around'>
            <CardH title={'RAZAS'} description={`El total de registros es de ${razas.length}`} />
      </div>

      <div className='content-cards me-5 d-flex flex-wrap justify-content-around'>
            <CardH title={'ALIMENTOS'} description={`El total de registros es de ${alimentos.length}`} />
      </div>

      <div className='content-cards me-5 d-flex flex-wrap justify-content-around'>
            <CardH title={'GRANJAS'} description={`El total de registros es de ${granjas.length}`} />
      </div>

      <div className='content-cards me-5 d-flex flex-wrap justify-content-around'>
            <CardH title={'POTREROS'} description={`El total de registros es de ${potreros.length}`} />
      </div>

      <div className='content-cards me-5 d-flex flex-wrap justify-content-around'>
            <CardH title={'VITALES'} description={`El total de registros es de ${vitalidades.length}`} />
      </div>
  </div>
     



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