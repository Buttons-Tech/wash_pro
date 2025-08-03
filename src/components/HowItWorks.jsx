import React from 'react'

const HowItWorks = (props) => {

   const  {data} = props
  
        

  return (
    <>
    
    
    <div className=' works-title-container'>
        
        <h2>
        How It Works
        </h2>
        <p>In 3 Simple steps</p>   
        <div className='works-title-container'>
            <div className='works-title-line'/>
            <div className='works-title-line'/>
          </div>     
        </div>
        <ul>
            {data.map((d, i)=>
            <li key={i} style={{listStyle: "none"}}>
                
            <div className='works-container'>
                <img src="" alt="" />
                <p className='works-steps'>{d.id}</p>
                <h1>{d.title}</h1>
                <p>{d.descr}</p>
            </div>
            </li>
            )}
        </ul>

    </>
  )
}

export default HowItWorks