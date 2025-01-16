import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

const [jokes,setJokes]=useState([])
//axios khud json handle krta
useEffect(()=>{
  // yaha humne shuru me pura url dala tha 
  // axios.get('http://localhost:5000/jokes') pr we have to change it due to cors  and stndztion
  //isko thik krne ke liye proxy lagayege and 
  //proxy llgegi vite config js me kyuki humne vite se app banaya ahai 
  axios.get('/api/jokes')
  .then((response)=>{
    setJokes(response.data)
  })
  .catch((error)=>{
    console.log("ye tha error: ",error)
  })
},[]
)
 return(
  <>
  <h1>aagye ?</h1>
  <p> {jokes.length}
 {
  jokes.map((joke,index)=>{
    return (<div key={joke.id}>
      <h3>
        {joke.title} 
      </h3> 
      <h2>
        {joke.description}
      </h2>
    </div>)
  })
 }
  </p>
  </>
 )
}

export default App
