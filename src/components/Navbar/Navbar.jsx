import React from "react";
import { NavLink } from "react-router-dom";
//s и в нем сидят как раз новые  автосгенерированные
import s from './Navbar.module.css';

const Navbar =()=>{
    return <nav className={s.nav}>  <div className={s.item}>
        {/* NavLink to что бы перезагрузки не было */}
        <NavLink className = { navData => navData.isActive ? s.active : s.item } to="/profile" >Profile</NavLink>
    </div>
    <div className={s.item}>
    <NavLink className = { navData => navData.isActive ? s.active : s.item } to="/dialogs">Messages</NavLink>
    </div>
    <div className={s.item}>
     <a>News</a>
    </div>
    <div className={s.item}>
     <a>Music</a>
    </div>
    <div className={s.item}>
     <a>Settings</a>
    </div>
    
    </nav>
}

export default  Navbar;
