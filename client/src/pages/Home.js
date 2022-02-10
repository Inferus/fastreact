
import { useEffect, useState } from 'react'
export const Home = () => {
const [data, setdata] = useState("")
const [seconds, setseconds] = useState(0)


useEffect(()=>{
  const getData = ()=>{
    const int = setInterval(()=>{
      
    
     setseconds(prev => prev + 1)},1000)
     setTimeout(()=>{
      
      
   setdata('OK')
   clearInterval(int)
     },3000)
   }
 console.log('render2')
  getData()
  
},[])
  return (
    <div className='home'>
<div className="lastNews">
  <div className="heading"></div>
  <div className="description"></div>
</div>
<div className="greet">
<div className="heading"></div>
  <div className="description"></div>
</div>
<div className="greet">
<div className="heading"></div>
  <div className="description"></div>
</div>
<div className="greet">
<div className="heading"></div>
  <div className="description"></div>
</div>
<div className="greet">
<div className="heading"></div>
  <div className="description"></div>
</div>
    
    </div>
  )
}
