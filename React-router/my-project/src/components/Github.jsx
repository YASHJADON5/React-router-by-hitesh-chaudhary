import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useLoaderData} from 'react-router-dom'
function Github() {
    const result= useLoaderData();
    // console.log(result)
    //  const [result,setResult] = useState([])
    // useEffect(()=>{
      
    //     fetch("https://api.github.com/users/yashjadon5")
    //     .then((res)=> res.json())
    //     .then((res)=> {setResult(res)})
    
    // },[])

  return (
    <div className='bg-gray-600 text-center text-white
    m-4 p-8 text-3xl
    '>
       Github Followers:{result.following}
       <img src={result.avatar_url} alt=""  width={300}/>
    </div>
  )
}

export default Github


export  async function githubInfoLoader(){
  
    const response=await fetch("https://api.github.com/users/yashjadon5");
    console.log(response)

    return response;

}
