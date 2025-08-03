import React, { useState } from 'react'

const Navbar = () => {

    const [menu, setMenu] = useState(true);

    const menuToggle = ()=>{
        setMenu(prevMenu=> !prevMenu)
        // window.alert(`The Menu is ${menu}`)
    }

  return (
    <>
        <nav className='nav-container'>
            <div className='nav-logo-container'>
                <span className='nav-logo-title'>Wash_Pro</span>
                <span className='nav-logo-descr'>Mobile Car Wash App</span>
            </div>
           
            {menu && 
            
            <div className='menu-icon-container' onClick={menuToggle}>
                
                <div className='menu-icon'></div>
                <div className='menu-icon'></div>
                <div className='menu-icon'></div>
            </div>
            }
            {!menu && 
            
             <ul className='menu-list' onClick={menuToggle}>
                <div className='menu-close'></div>
                <li>Home</li>
                <li>Services</li>
                <li>About Us</li>
                <li>Contact us</li>
            </ul>
            }
        </nav>
    </>
  )
}

export default Navbar