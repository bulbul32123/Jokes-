import React, { useEffect, useState } from 'react'
import Loading from './Loadings'
import './JokesApp.css'
export default function JokesApp() {
    const [data,setData] = useState()
    const [data2,setData2] = useState()
    const [loading ,setLoading] = useState(true)
    const url = 'https://dad-jokes.p.rapidapi.com/random/joke/png?rapidapi-key=1aa8380739msh63c03e58b8251e4p1a6988jsne619a57fcd4e'
    const fetchapi = async ()=>{   
        const res = await fetch(url)
        const datas = await res.json()
        setData(datas.body.setup)
        setData2(datas.body.punchline)
        setLoading(false)
    }
    useEffect(()=>{
        fetchapi()
    },[])
    const handle = ()=>{
        setLoading(true)
        fetchapi()
    }
  return (
    <>
        <div className="container container-fluid">
          <h1>Funny Jokes In Here</h1>
      {
        (loading) ?  <Loading /> : <div className="center">
         <h2> Joke:  <span>{data} </span> </h2>
         <h3> Punchline: <span>{data2} </span>😄😄😄</h3>
        </div> 
     }
         <button className='btn btn-primary' disabled={loading} onClick={handle}>Next Joke</button>
     </div>
  
    </>
  )
}
