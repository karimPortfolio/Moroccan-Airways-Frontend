import React , { useState} from 'react'
import NavbarDesk from './navbar/navbarDes'
import NavbarMobile from './navbar/navbarMob'
import '../../css/main.css';

function Header({headerStyle}) {

  const [scrollCheck , setScrollCheck] = useState(false);

  const handleHeaderOnScroll = () =>{
      if (window.scrollY > 200)
      {
         setScrollCheck(true);
      }
      else
      {
        setScrollCheck(false);
      }
  }

  window.addEventListener('scroll' , handleHeaderOnScroll);

  return (
    
    <header className={scrollCheck ? 'scrollChanges shadow py-2' : 'py-2'} style={headerStyle} >
        <NavbarDesk />
        <NavbarMobile />
    </header>
  )
}

export default Header