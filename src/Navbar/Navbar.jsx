import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.css"


const Navbar=()=>{
    return(
<nav className="h">




    <div className="route" >
    
    <button id='run' className="item">
   
      <NavLink to='/main' >Главная </NavLink>  
    </button>
    <button id='run' className="item">
   
   <NavLink to='/instr' >Инструкция </NavLink>  
 </button>
  

    
    
    
    
</div>

</nav>

    )
}
export default Navbar