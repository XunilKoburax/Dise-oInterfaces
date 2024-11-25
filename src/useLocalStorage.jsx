import { useState,useEffect } from "react";

function useLocalStorage(itemName,intialValue){
    const [item,setItem] = useState(intialValue)
    const [loading,setLoading] = useState(true)
    const[error, setError] = useState(false)

    useEffect(
      () =>{
        setTimeout( () => {
                    try {
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
            
        } catch (error) {
            setLoading(false);
            setError(true);            
        }
      },2000);
        
      },[itemName,intialValue]);

      const saveItem = (newItem) =>{
        localStorage.setItem(itemName,JSON.stringify(newItem));
        setItem(newItem)
      }
    

    return {  //por convencion se debe retornar un objeto en ves de un arreglo si lo que estoy regresando son mas de 2 parametros
      item,
      saveItem,
      loading,
      error}

  }

  export {useLocalStorage}