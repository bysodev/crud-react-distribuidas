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
const URL_GET_VITALIDAD = 'http://localhost:8082/alimentacion/get'


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
    const [alimentos, setalimentos] = useState([{nombre_granja: '', tamanio_granja: '', ubicacion: ''}])
    const [animal, setanimal] = useState({genero: '', edad: ''})
    const [vitalidades, setvitalidad] = useState({})
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
      getAlimentos();
      getVitalidad();
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

    const saveAlimento = async (data) => {
      const res = await axios.post('http://localhost:8082/alimentacion/add',data)
      console.log(res)
    }

    const saveVitalidad = async (data) => {
      const res = await axios.post('http://localhost:8082/vitalidad/add',data)
      console.log(res)
    }


    const editAnimal = async (data) => {
      const res = await axios.put(`http://localhost:8082/animal/update/${data.id}`,data)
      console.log(res)
    }

    const editGranja = async (data) => {
      const res = await axios.put(`http://localhost:8082/granja/update/${data.id}`,data)
      console.log(res)
    }

    const editPotrero = async (data) => {
      const res = await axios.put(`http://localhost:8082/potrero/update/${data.id}`,data)
      console.log(res)
    }

    const editRaza = async (data) => {
      const res = await axios.put(`http://localhost:8082/raza/update/${data.id}`,data)
      console.log(res)
    }
    const editAlimento = async (data) => {
      const res = await axios.put(`http://localhost:8082/alimentacion/update/${data.id}`,data)
      console.log(res)
    }

    const deleteRaza = async (data) => {
      const res = await axios.delete(`http://localhost:8082/raza/delete/${data.id}`,data)
      console.log(res)
    }

    const deleteAlimento = async (data) => {
      const res = await axios.delete(`http://localhost:8082/alimentacion/delete/${data.id}`,data)
      console.log(res)
    }

    const deletePotrero = async (data) => {
      const res = await axios.delete(`http://localhost:8082/potrero/delete/${data.id}`,data)
      console.log(res)
    }

    const deleteGranja = async (data) => {
      const res = await axios.delete(`http://localhost:8082/granja/delete/${data.id}`,data)
      console.log(res)
    }

    const deleteAnimal = async (data) => {
      const res = await axios.delete(`http://localhost:8082/animal/delete/${data.id}`,data)
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
      setalimentos(res.data)
    }
    const getVitalidad = async () => {
      const res = await axios.get(URL_GET_VITALIDAD)
      // console.log(res)
      setvitalidad(res.data)
    }

    const [user, setuser] = useState({
        id: 123, 
        name: 'Bryan Solórzano',
        email: 'thebryan0210@gmail.com'
    });

    const findPotrero = async (pot) => {
      const res = await axios.get( `http://localhost:8082/potrero/get/${pot.id}` )
      const {data} = res;
      console.log(data['animal'].length)
      if( data['animal'].length > 0 ){
        console.log('retirna false');
        return false
      }
      return true;
    }

    const findGranja = async (grand) => {
      const res = await axios.get( `http://localhost:8082/granja/get/${grand.id}` )
      const {data} = res;
      console.log(data['potrero'].length)
      if( data['potrero'].length > 0 ){
        console.log('retirna false');
        return false
      }
      return true;
    }

    const findAlimentacion = async (ali) => {
      const res = await axios.get( `http://localhost:8082/alimentacion/get/${ali.id}` )
      const {data} = res;
      if( !data['animalesId'] ){
        return true;
      }
      return false;
    }

    const findRaza = async (pot) => {
      const res = await axios.get( `http://localhost:8082/raza/get/${pot.id}` )
      const {data} = res;
      console.log(data['animal'].length)
      if( data['animal'].length > 0 ){
        console.log('retirna false');
        return false
      }
      return true;
    }
    
    return (
        // <UserContext.Provider value={{ hola: 'Mundo', user: user}}>
        <UserContext.Provider value={{vitalidades, saveVitalidad, deleteAnimal, findRaza, findAlimentacion, deleteGranja, getPotreros, deletePotrero, findGranja, findPotrero, deleteAlimento, editAlimento, alimentos, deleteRaza, editRaza, editPotrero, editGranja, editAnimal, saveAlimento, saveRaza, savePotrero, saveGranja, saveAnimal, granjas, potreros, razas, animales, guardado, animales, granjas, potreros, razas, user, setuser, products, setproducts, users, setusers, cartItems, setcartItems}}>
          {children}
        </UserContext.Provider>
    )
}
// 