import {useEffect,useState} from "react"

//hook is nothing but a function which return array[data,fn]
function useCurrencyInfo(currency){

    const[data,setData]=useState({}) // data mai jo changes karo wo UI mai bhi ana chaihiye isliye use useState
    //{} -> useState kyunki agar API se kuch nahi aya to empty object to return kar hi sakte hai :)

    //fetch karne samy jab bhi currency parameter change hua to api ko wapas call lagao
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    console.log(setData);
    return data
}
export default useCurrencyInfo;