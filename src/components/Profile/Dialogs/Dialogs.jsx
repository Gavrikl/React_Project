import React from "react";
import { NavLink } from "react-router-dom";
import DialogsItem from "./DialogItem/DialogsItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";




const Dialogs= (props)=>{



let messagesElements = props.state.messages.map(m=><Message message={m.message} id={m.id} />);
//Массив jsx элементов, получили новый jsx 
let dialogsElements= props.state.dialogs.map( d => <DialogsItem name={d.name} />  ); 


return(
<div className={s.dialogs} >

        <div className={s.dialogsItems}>
          {/* Вставляем массив  */}
        {dialogsElements}
        </div>
    <div className={s.messages}>
       {messagesElements}
    </div>
</div>
)
}





export default Dialogs;