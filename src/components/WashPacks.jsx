import React from 'react'

const WashPacks = (props) => {
    const {data} = props
  return (
    <>
    
<h1 className='wash-pack-header'>CHOOSE YOUR SPARKLE!</h1>  
    <ul className='wash-pack-list'>
        {data.map((d, index)=>
        <li key={index} className='wash-pack'> <h2>{d.title}</h2> Starting from: <b> N{d.price}</b> {d.offer} </li>
        )}
    </ul>
  </>
  )
}

export default WashPacks