import { useState, useEffect } from 'react';
import {UserContext} from './UserContext'
import axios from 'axios'; 

// const URL = process.env.DATA_MONGO
const URL_PRODUCTS = 'http://127.0.0.1:3001/api/products/'
const URL_USERS = 'http://127.0.0.1:3001/api/users/'
const URL_ADD_RAZA = ''
const URL_ADD_GRANJA = 'http://localhost:8082/granja/add'
const URL_GET_RAZA = 'http://localhost:8082/raza/get'
const URL_GET_ANIMAL = 'http://localhost:8082/animal/get'
const URL_GET_GANJA = 'http://localhost:8082/granja/get'
const URL_GET_POTRERO = 'http://localhost:8082/potrero/get'
const URL_GET_ALIMENTACION = 'http://localhost:8082/alimentacion/get'


// const user = {
//     id: 123, 
//     name: 'Bryan Solórzano',
//     email: 'thebryan0210@gmail.com'
// }

export const UserProvider = ({children}) => {

    const [guardado, setguardado] = useState('');
    const [products, setproducts] = useState([{nombre: '', precio: [0.00], precio_final: 0.0,  categoria: '', id: '0'}])
    const [users, setusers] = useState([{userName: '', passwordHash: '', products: []}])
    const [animales, setanimales] = useState([{id: '',genero: '', edad: '', potrero_id: '', raza_id: ''}])
    const [razas, setrazas] = useState([{nombre_raza: ''}])
    const [potreros, setpotreros] = useState([{granja_id: '', hectarias: '', nombre_potrero: '', tipo_suelo: ''}])
    const [granjas, setgranjas] = useState([{nombre_granja: '', tamanio_granja: '', ubicacion: ''}])
    const [alimento, setalimento] = useState([{nombre_granja: '', tamanio_granja: '', ubicacion: ''}])
    const [animal, setanimal] = useState({genero: '', edad: ''})
    const [veterinario, setveterinario] = useState({nombre: '', email: '',telefono: ''})
    // A modo prueba
    const [cartItems, setcartItems] = useState([])

    // PARA EL LOGIN
    const login = () => setusers(users)
    const logout = () => setusers(null)

    useEffect(() => {
      // getProductos()
      // getUsuarios()
      getAnimales();
      getGranjas();
      getPotreros();
      getRazas();
    }, [])

    const saveAnimal = async (data) => {
      const res = await axios.post('http://localhost:8082/animal/add',data)
      console.log(res)
    }

    const saveGranja = async (data) => {
      const res = await axios.post('http://localhost:8082/granja/add',data)
      console.log(res)
    }

    const savePotrero = async (data) => {
      const res = await axios.post('http://localhost:8082/potrero/add',data)
      console.log(res)
    }

    const saveRaza = async (data) => {
      const res = await axios.post('http://localhost:8082/raza/add',data)
      console.log(res)
    }


    const getUsuarios = async () => {
      const res = await axios.get(URL_USERS)
      // console.log(res)
      setusers(res.data)
    }

    const getAnimales = async () => {
      const res = await axios.get(URL_GET_ANIMAL)
      // console.log(res)
      setanimales(res.data)
    }
    const getGranjas = async () => {
      const res = await axios.get(URL_GET_GANJA)
      // console.log(res)
      setgranjas(res.data)
    }
    const getPotreros = async () => {
      const res = await axios.get(URL_GET_POTRERO)
      // console.log(res)
      setpotreros(res.data)
    }
    const getRazas = async () => {
      const res = await axios.get(URL_GET_RAZA)
      // console.log(res)
      setrazas(res.data)
    }
    const getAlimentos = async () => {
      const res = await axios.get(URL_GET_ALIMENTACION)
      // console.log(res)
      setrazas(res.data)
    }

    const [user, setuser] = useState({
        id: 123, 
        name: 'Bryan Solórzano',
        email: 'thebryan0210@gmail.com'
    });
    
    return (
        // <UserContext.Provider value={{ hola: 'Mundo', user: user}}>
        <UserContext.Provider value={{ saveRaza, savePotrero, saveGranja, saveAnimal, granjas, potreros, razas, animales, veterinario, setveterinario, guardado, animales, granjas, potreros, razas, user, setuser, products, setproducts, users, setusers, cartItems, setcartItems}}>
          {children}
        </UserContext.Provider>
    )
}
// 