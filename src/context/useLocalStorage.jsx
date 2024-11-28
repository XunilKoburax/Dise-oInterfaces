import { useState,useEffect } from "react";

function useLocalStorage(itemName,intialValue){
    const [item,setItem] = useState(intialValue)
    const [loading,setLoading] = useState(true) //estado de carga inical para mis componentes
    const[error, setError] = useState(false) //estado de error si hay alguna situacion

    useEffect(
      () =>{
        setTimeout( () => { // colocar un tiempo de espera para renderizar informacion
                    try { // intentar esto 
            const localStorageItem = localStorage.getItem(itemName);
        let parseItem;
        if(!localStorageItem ){
          localStorage.setItem(itemName,JSON.stringify(intialValue));
          parseItem = intialValue;
        }
        else{
          parseItem = JSON.parse(localStorageItem);
          setItem(parseItem);
        }

        setLoading(false);
            
        } catch (error) { // si falla mi carga
            setLoading(false);
            setError(true);            
        }
      },2000); // timeout de respuesta
        
      },[]);

      const saveItem = (newItem) =>{
        localStorage.setItem(itemName,JSON.stringify(newItem));
        setItem(newItem)
      }
    

    return {  //por convencion se debe retornar un objeto en ves de un arreglo si lo que estoy regresando son mas de 2 parametros
      item, //estado inicial
      saveItem, //actualizacion de estado
      loading, //estado de carga
      error} //estado de error

  }

  export {useLocalStorage}